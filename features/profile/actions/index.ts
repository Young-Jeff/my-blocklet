"use server";

import { prisma } from "@/lib/prisma";

import {
  type ProfileSchemaDTO,
  profileSchema,
} from "../types";

export const getTags = async (params: ProfileSchemaDTO) => {
  const tags = await prisma.profile.findMany({

  });

  return { tags };
};

export const updateProfile = async (params: ProfileSchemaDTO) => {
  const result = await profileSchema.safeParseAsync(params);
  if (!result.success) {
    const error = result.error.format()._errors?.join(";");
    // TODO: 记录日志
    throw new Error(error);
  }
  if (params.id) {
    await prisma.profile.update({
      data: {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
      },
      where: {
        id: params.id,
      },
    });
  } else {
    await prisma.profile.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
      },
    });
  }
};
export const getProfileByID = async () => {
  const profile = await prisma.profile.findFirst();
  return { profile };
};
