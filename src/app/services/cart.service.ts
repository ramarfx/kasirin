import { Product } from "@prisma/client";
import { prisma } from "../database";
import { convertBigIntToNumber } from "../utils/utils";

// const addToCart = async (product: Product) => {
//   try {
//     if (!product) {
//       throw new Error("product not found");
//     }

//     const cart = await prisma.cart.findFirst({
//       where: {
//         product_id: product.id,
//       },
//     });

//     if (cart) {
//       await prisma.cart.update({
//         where: {
//           id: cart.id,
//         },
//         data: {
//           amount: cart.amount + 1,
//         },
//       });
//     } else {
//       await prisma.cart.create({
//         data: {
//           product_id: product.id,
//           amount: 1,
//         },
//       });
//     }

//     return { message: `product ${product.name} added to cart` };
//   } catch (error) {
//     throw new Error(error);
//   }
// };

const get = async () => {
  try {
    const carts = await prisma.cart.findMany({
        select: {
            product: true,
            id: true,
            amount: true,
        }
    })

    const cartsWithNumbers = carts.map(cart => ({
        ...cart,
        product: {
          ...cart.product,
          price: Number(cart.product.price),
        },
      }));
  
      const total = cartsWithNumbers.reduce((total, cart) => {
        return total + cart.product.price * cart.amount;
      }, 0);

    return {
        carts: convertBigIntToNumber(carts),
        total: total
    };
    
  } catch (error) {
    throw new Error(error);
  }
}

const destroy = async (id: number) => {
  try {
    const cart = await prisma.cart.findFirstOrThrow({
        where: {
            id: id
        }
    })

    await prisma.cart.delete({
        where: {
            id: cart.id
        }
    })

    return {message: 'cart deleted'}

  } catch (error) {
    throw new Error(error);
  }
}

const destroyAll = async () => {
    try {
        await prisma.cart.deleteMany()

        return {message: 'all cart deleted'};
    } catch (error) {
        throw new Error(error)
    }
}



export default {
  // addToCart,
  get,
  destroy,
  destroyAll
};
