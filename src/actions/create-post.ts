"use server";

import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const slug_ = decodeURIComponent(slug); //i added this ow cause of issue with white spaces in topic slug is %20%
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }
  const ss = await db.topic.findFirst();
  console.log(ss, "----------------------");
  const topic = await db.topic.findFirst({
    where: { slug: slug_ },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find topic"],
      },
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create post"],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(slug_));
  redirect(paths.postShow(slug_, post.id));
}
