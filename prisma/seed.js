// prisma/seed.js (ESM 모듈 사용)
// package.json에 "type": "module" 설정이 필요합니다.
// 설치: npm install @prisma/client @faker-js/faker

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

// 실제 사용 중인 이미지 URL 모음 (제공해주신 데이터 기반)
const existingImageUrls = [
  [
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcarM_61189887_045.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61189887_002.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61189887_008.jpg",
  ],
  [
    "https://image2.lotteimall.com/goods/47/57/82/1130825747_1.jpg/dims/resizemc/550x550/optimize",
    "https://imagecdn.skstoa.com/goods/861/37979861_g.jpg",
    "https://sitem.ssgcdn.com/93/76/32/item/1000561327693_i1_750.jpg",
  ],
  [
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61188514_001.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61188514_002.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61188514_015.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61188514_016.jpg",
  ],
  [
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61187665_001.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61187665_002.jpg",
    "https://img.kcar.com/carpicture/carpicture08/pic6118/kcar_61187665_015.jpg",
  ],
  [
    "https://sitem.ssgcdn.com/92/39/32/item/1000034323992_i1_750.jpg",
    "https://lh3.googleusercontent.com/proxy/2f_wESPbEEwjDHvOXsvXJeYlmCL5DpjQyd31zmCOkH416w9FW1cMYiUgGiqIaYcopE4YonpJ9bq8ArTssVM2TuAoGvUtnMSTldZFiLah19c7nt6YHuHSjsGbwQJn2zT5Bgdf_9B6c2gzLcjhrVRzaukreHkGhGDFg0Z8",
  ],
  [
    "https://img.kcar.com/carpicture/carpicture09/pic6119/kcar_61190397_001.jpg",
    "https://img.kcar.com/carpicture/carpicture09/pic6119/kcar_61190397_002.jpg",
    "https://img.kcar.com/carpicture/carpicture09/pic6119/kcar_61190397_009.jpg",
  ],
];

// 태그 풀 (임의 선택)
const tagsPool = [
  "1인소유",
  "무사고",
  "비흡연",
  "풀옵션",
  "액세서리",
  "친환경",
  "패션",
  "렌트이력없음",
  "짧은주행",
  "7인승",
  "관리우수",
  "정비상태 우수",
  "세금계산서발행",
];

async function main() {
  // 기존 데이터 삭제
  // await prisma.comment.deleteMany();
  // await prisma.article.deleteMany();
  // await prisma.product.deleteMany();
  // await prisma.user.deleteMany();

  // 1. Users 생성
  const userCount = 30;
  const users = [];
  for (let i = 0; i < userCount; i++) {
    const u = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        nickname: faker.internet.username(),
        password: faker.internet.password(),
      },
    });
    users.push(u);
  }

  // 2. Products 생성 (100개, 기존 이미지 URL 재사용)
  const productCount = 100;
  const products = [];
  for (let i = 0; i < productCount; i++) {
    const urls = faker.helpers.arrayElement(existingImageUrls);
    const p = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price(1000, 100000, 0)),
        tags: faker.helpers.arrayElements(
          tagsPool,
          faker.number.int({ min: 2, max: 4 })
        ),
        imageUrls: urls,
      },
    });
    products.push(p);
  }

  // 3. Likes 연결 (각 product에 0~20명의 user 연결)
  for (const prod of products) {
    const likeCount = faker.number.int({ min: 0, max: 20 });
    const likers = faker.helpers.shuffle(users).slice(0, likeCount);
    if (likers.length) {
      await prisma.product.update({
        where: { id: prod.id },
        data: { likedBy: { connect: likers.map((u) => ({ id: u.id })) } },
      });
    }
  }

  // 4. Articles 생성 (150개, 평균 사용자당 5건)
  const articleCount = 150;
  const articles = [];
  for (let i = 0; i < articleCount; i++) {
    const author = faker.helpers.arrayElement(users);
    const a = await prisma.article.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(2),
        author: { connect: { id: author.id } },
      },
    });
    articles.push(a);
  }

  // 5. Comments 생성 (100개, Article/Product 랜덤)
  const commentCount = 100;
  for (let i = 0; i < commentCount; i++) {
    const user = faker.helpers.arrayElement(users);
    const isArticle = faker.datatype.boolean();
    const connectField = isArticle
      ? {
          article: { connect: { id: faker.helpers.arrayElement(articles).id } },
        }
      : {
          product: { connect: { id: faker.helpers.arrayElement(products).id } },
        };

    await prisma.comment.create({
      data: {
        content: faker.lorem.sentence(),
        user: { connect: { id: user.id } },
        ...connectField,
      },
    });
  }

  console.log("🌱 Seeding completed!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
