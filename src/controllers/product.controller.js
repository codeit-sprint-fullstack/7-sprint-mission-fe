import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Post
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, tags, imageUrls } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        tags,
        imageUrls,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

//Get
export const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        _count: {
          select: { likedBy: true }, // 찜한 유저 수만 가져오기
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//Update
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

//Delete
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id },
    });

    res.status(204).send(); // No Content
  } catch (error) {
    next(error);
  }
};
