// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: any;
  meals: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    products: [
      {
        id: 145,
        title: 'Any 2 Large (15") Pizzas',
        slug: "any-2-large-15-pizzas",
        description: 'Any 2 Large (15") Pizzas',
        price_takeaway: 2950,
        price_delivery: 2950,
        image: "",
        visible_in: "delivery",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 2047,
            title: 'Select First Large 12" Pizza',
            basket_title: "First Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3637,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3638,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3639,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3640,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3641,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3642,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3643,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3644,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3645,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3646,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3647,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3648,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 109,
                title: "Chicken Special",
                description:
                  "Red Onions, Tandoori Chicken, Mushrooms & Green Peppers",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3649,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3650,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3651,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3652,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3653,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3654,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3655,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3656,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3657,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3658,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3659,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3660,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2048,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4755,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4756,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4757,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4758,
                    size_id: null,
                    price_takeaway: 400,
                    price_delivery: 400,
                  },
                ],
              },
            ],
          },
          {
            id: 2049,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24558,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24559,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24560,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24561,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24562,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24563,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24564,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24565,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24566,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24567,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24568,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24569,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24570,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24571,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24572,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24573,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24574,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24575,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24576,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24577,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24578,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24579,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24580,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24581,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24582,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24583,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24584,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24585,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24586,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24587,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24588,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
            ],
          },
          {
            id: 2050,
            title: 'Select Second Large 12" Pizza',
            basket_title: "Second Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3661,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3662,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3663,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3664,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3665,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3666,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3667,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3668,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3669,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3670,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3671,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3672,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 109,
                title: "Chicken Special",
                description:
                  "Red Onions, Tandoori Chicken, Mushrooms & Green Peppers",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3673,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3674,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3675,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3676,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3677,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3678,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3679,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3680,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3681,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3682,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3683,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3684,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2051,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4759,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4760,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4761,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4762,
                    size_id: null,
                    price_takeaway: 400,
                    price_delivery: 400,
                  },
                ],
              },
            ],
          },
          {
            id: 2052,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24589,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24590,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24591,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24592,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24593,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24594,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24595,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24596,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24597,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24598,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24599,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24600,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24601,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24602,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24603,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24604,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24605,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24606,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24607,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24608,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24609,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24610,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24611,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24612,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24613,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24614,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24615,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24616,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24617,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24618,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24619,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
      {
        id: 146,
        title: 'Any 2 Medium (12") Pizzas',
        slug: "any-2-medium-12-pizzas",
        description: 'Any 2 Medium (12") Pizzas',
        price_takeaway: 2450,
        price_delivery: 2450,
        image:
          "https://backend.italianpizzas.co.uk/images/d9de753a2041a8e914f2a0c40a8186b1.png",
        visible_in: "both",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 2053,
            title: 'Select First Medium 12" Pizza',
            basket_title: "First Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3685,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3686,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3687,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3688,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3689,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3690,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3691,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3692,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3693,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3694,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3695,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3696,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 109,
                title: "Chicken Special",
                description:
                  "Red Onions, Tandoori Chicken, Mushrooms & Green Peppers",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3697,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3698,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3699,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3700,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3701,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3702,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3703,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3704,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3705,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3706,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3707,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3708,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2054,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4763,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4764,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4765,
                    size_id: null,
                    price_takeaway: 200,
                    price_delivery: 200,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4766,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
            ],
          },
          {
            id: 2055,
            title: "Select an Option",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24620,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24621,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24622,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24623,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24624,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24625,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24626,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24627,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24628,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24629,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24630,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24631,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24632,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24633,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24634,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24635,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24636,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24637,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24638,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24639,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24640,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24641,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24642,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24643,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24644,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24645,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24646,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24647,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24648,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24649,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24650,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
            ],
          },
          {
            id: 2056,
            title: 'Select Second Medium 12" Pizza',
            basket_title: "Second Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3709,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3710,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3711,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3712,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3713,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3714,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3715,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3716,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3717,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3718,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3719,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3720,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 109,
                title: "Chicken Special",
                description:
                  "Red Onions, Tandoori Chicken, Mushrooms & Green Peppers",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3721,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3722,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3723,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3724,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3725,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3726,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3727,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3728,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3729,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3730,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3731,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3732,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2057,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 5,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4767,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4768,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4769,
                    size_id: null,
                    price_takeaway: 200,
                    price_delivery: 200,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4770,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
            ],
          },
          {
            id: 2058,
            title: "Select an Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24651,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24652,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24653,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24654,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24655,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24656,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24657,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24658,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24659,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24660,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24661,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24662,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24663,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24664,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24665,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24666,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24667,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24668,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24669,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24670,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24671,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24672,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24673,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24674,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24675,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24676,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24677,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24678,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24679,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24680,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24681,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
      {
        id: 147,
        title: 'Any 2 Small (9") Pizzas',
        slug: "any-2-small-9-pizzas",
        description: 'Any 2 Small (9") Pizzas',
        price_takeaway: 1850,
        price_delivery: 1850,
        image:
          "https://backend.italianpizzas.co.uk/images/0f6906b00c5344268ff5577d987e63a1.png",
        visible_in: "both",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 2059,
            title: 'Select First 9" Pizza',
            basket_title: "First Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3733,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3734,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3735,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3736,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3737,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3738,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3739,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3740,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3741,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3742,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3743,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3744,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 109,
                title: "Chicken Special",
                description:
                  "Red Onions, Tandoori Chicken, Mushrooms & Green Peppers",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3745,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3746,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3747,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3748,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3749,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3750,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3751,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3752,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3753,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3754,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3755,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3756,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2060,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4771,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4772,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4773,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4774,
                    size_id: null,
                    price_takeaway: 200,
                    price_delivery: 200,
                  },
                ],
              },
            ],
          },
          {
            id: 2061,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24682,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24683,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24684,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24685,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24686,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24687,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24688,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24689,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24690,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24691,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24692,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24693,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24694,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24695,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24696,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24697,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24698,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24699,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24700,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24701,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24702,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24703,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24704,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24705,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24706,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24707,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24708,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24709,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24710,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24711,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24712,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
            ],
          },
          {
            id: 2062,
            title: 'Select Second 9" Pizza',
            basket_title: "Second Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3757,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3758,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3759,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3760,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3761,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3762,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3763,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3764,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3765,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3766,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3767,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3768,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 109,
                title: "Chicken Special",
                description:
                  "Red Onions, Tandoori Chicken, Mushrooms & Green Peppers",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3769,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3770,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3771,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3772,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3773,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3774,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3775,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3776,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3777,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3778,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3779,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3780,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2063,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 5,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4775,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4776,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4777,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4778,
                    size_id: null,
                    price_takeaway: 200,
                    price_delivery: 200,
                  },
                ],
              },
            ],
          },
          {
            id: 2064,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24713,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24714,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24715,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24716,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24717,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24718,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24719,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24720,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24721,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24722,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24723,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24724,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24725,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24726,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24727,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24728,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24729,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24730,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24731,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24732,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24733,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24734,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24735,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24736,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24737,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24738,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24739,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24740,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24741,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24742,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24743,
                    size_id: null,
                    price_takeaway: 100,
                    price_delivery: 100,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
    ],
    meals: [
      {
        id: 141,
        title: "Happy Family Meal",
        slug: "happy-family-meal",
        description: "Happy Family Meal",
        price_takeaway: 3699,
        price_delivery: 3699,
        image:
          "https://backend.italianpizzas.co.uk/images/dadd61f5117fe3060e43542cfc38117e.png",
        visible_in: "both",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 2413,
            title: 'Select First Large 15" Pizza',
            basket_title: "First Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 5262,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5263,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5264,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5265,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5266,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5267,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5268,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5269,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5270,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5271,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5272,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5273,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5274,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5275,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5276,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5277,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5278,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5279,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5280,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 5281,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5282,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5283,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Western Bbq",
                description:
                  "Red Onions, Mixed Peppers, Mexican Chicken, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5284,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 165,
                title: "Bbq Beef",
                description: "Bbq Sauce, Red Onions, Fresh Garlic, Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5285,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2414,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5548,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5549,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5550,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5551,
                    size_id: null,
                    price_takeaway: 400,
                    price_delivery: 400,
                  },
                ],
              },
            ],
          },
          {
            id: 2415,
            title: "Select an Option",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27608,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27609,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27610,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27611,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27612,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27613,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27614,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27615,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27616,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27617,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27618,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27619,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27620,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27621,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27622,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27623,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27624,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27625,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27626,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27627,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27628,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27629,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27630,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27631,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27632,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27633,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27634,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27635,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27636,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27637,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27638,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
            ],
          },
          {
            id: 2416,
            title: 'Select Second Large 15" Pizza',
            basket_title: "Second Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 5286,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5287,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5288,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5289,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5290,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5291,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5292,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5293,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5294,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5295,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5296,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5297,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5298,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 112,
                title: "American Hot",
                description: "American Hot",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5299,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5300,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5301,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5302,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5303,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5304,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 5305,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5306,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5307,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Western Bbq",
                description:
                  "Red Onions, Mixed Peppers, Mexican Chicken, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5308,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2417,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 5,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5552,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5553,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5554,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5555,
                    size_id: null,
                    price_takeaway: 400,
                    price_delivery: 400,
                  },
                ],
              },
            ],
          },
          {
            id: 2418,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27639,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27640,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27641,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27642,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27643,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27644,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27645,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27646,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27647,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27648,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27649,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27650,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27651,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27652,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27653,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27654,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27655,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27656,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27657,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27658,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27659,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27660,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27661,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27662,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27663,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27664,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27665,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27666,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27667,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 94,
                title: "Italian Sausage",
                description: "Italian Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27668,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27669,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
            ],
          },
          {
            id: 2419,
            title: "Select First Classic Side",
            basket_title: "Side",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 7,
            required: 1,
            products: [
              {
                id: 76,
                title: "Chicken Nuggets",
                description: "Chicken Nuggets (6 Pcs + Dip)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5309,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 78,
                title: "Chips",
                description: "Chips",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5310,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 79,
                title: "Cheesy Chips",
                description: "Cheesy Chips",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5311,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 80,
                title: "Curly Fries + Dip",
                description: "Curly Fries + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 5312,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 84,
                title: "Potato Wedges + Dip",
                description: "Potato Wedges + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 5313,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 87,
                title: "Onion Rings (10 Pcs)",
                description: "Onion Rings (10 Pcs)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5314,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 88,
                title: "Jalapeno Cheesy Peppers (5 Pcs)",
                description: "Jalapenos Cheesy Peppers (5 Pcs)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5315,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 89,
                title: "Mozzarella Sticks",
                description: "Mozzarella Sticks",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5316,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 90,
                title: "Garlic Mushroom (7 Pcs + Dip)",
                description: "Garlic Mushroom (7 Pcs + Dip)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5317,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 139,
                title: "Garlic Bread",
                description: "Garlic Bread",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5318,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 140,
                title: "Garlic Bread With Cheese",
                description: "Garlic Bread With Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5319,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2420,
            title: "Select Second Classic Side",
            basket_title: "Second Side",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 8,
            required: 1,
            products: [
              {
                id: 76,
                title: "Chicken Nuggets",
                description: "Chicken Nuggets (6 Pcs + Dip)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5320,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 78,
                title: "Chips",
                description: "Chips",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5321,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 79,
                title: "Cheesy Chips",
                description: "Cheesy Chips",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5322,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 80,
                title: "Curly Fries + Dip",
                description: "Curly Fries + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 5323,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 84,
                title: "Potato Wedges + Dip",
                description: "Potato Wedges + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 5324,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 87,
                title: "Onion Rings (10 Pcs)",
                description: "Onion Rings (10 Pcs)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5325,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 88,
                title: "Jalapeno Cheesy Peppers (5 Pcs)",
                description: "Jalapenos Cheesy Peppers (5 Pcs)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5326,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 89,
                title: "Mozzarella Sticks",
                description: "Mozzarella Sticks",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5327,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 90,
                title: "Garlic Mushroom (7 Pcs + Dip)",
                description: "Garlic Mushroom (7 Pcs + Dip)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5328,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 139,
                title: "Garlic Bread",
                description: "Garlic Bread",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5329,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 140,
                title: "Garlic Bread With Cheese",
                description: "Garlic Bread With Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5330,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2421,
            title: "Select First Haagen Dazs (100 ml)",
            basket_title: "ICE CREAM",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 9,
            required: 1,
            options: [
              {
                id: 123,
                title: "Belgian Chocolate",
                description: "Belgian Chocolate",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5556,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 124,
                title: "Cookies & Cream",
                description: "Cookies & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5557,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 125,
                title: "Vanilla",
                description: "Vanilla",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5558,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 157,
                title: "Macadamia Nut Brittle",
                description: "Macadamia Nut Brittle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5559,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 158,
                title: "Pralines & Cream",
                description: "Pralines & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5560,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 159,
                title: "Summer Berries & Cream",
                description: "Summer Berries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5561,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Mango & Raspberry",
                description: "Mango & Raspberry",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5562,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 161,
                title: "Blueberries & Cream",
                description: "Blueberries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5563,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 162,
                title: "Strawberry & Cream",
                description: "Strawberry & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5564,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2422,
            title: "Select Second Haagen Dazs (100 ml)",
            basket_title: "Second ICE CREAM",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 10,
            required: 1,
            options: [
              {
                id: 123,
                title: "Belgian Chocolate",
                description: "Belgian Chocolate",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5565,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 124,
                title: "Cookies & Cream",
                description: "Cookies & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5566,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 125,
                title: "Vanilla",
                description: "Vanilla",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5567,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 157,
                title: "Macadamia Nut Brittle",
                description: "Macadamia Nut Brittle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5568,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 158,
                title: "Pralines & Cream",
                description: "Pralines & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5569,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 159,
                title: "Summer Berries & Cream",
                description: "Summer Berries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5570,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Mango & Raspberry",
                description: "Mango & Raspberry",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5571,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 161,
                title: "Blueberries & Cream",
                description: "Blueberries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5572,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 162,
                title: "Strawberry & Cream",
                description: "Strawberry & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5573,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2423,
            title: "Select Soft Drink",
            basket_title: "Drink",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 11,
            required: 1,
            options: [
              {
                id: 104,
                title: "Diet Coke Bottle",
                description: "Diet Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5574,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Pepsi Bottle",
                description: "Pepsi Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5575,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Orange Tango Bottle",
                description: "Orange Tango Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5576,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "7UP Bottle",
                description: "7UP Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5577,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Coke Bottle",
                description: "Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5578,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2424,
            title: "Please select dip",
            basket_title: "Dip",
            free_items: 0,
            max_items: 2,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 12,
            required: 0,
            addons: [
              {
                id: 84,
                title: "BBQ Dip",
                description: "BBQ Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27670,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 85,
                title: "Sweet Chili Dip",
                description: "Sweet Chili Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27671,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 86,
                title: "Hot Chili Dip",
                description: "Hot Chili Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27672,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 87,
                title: "Honey Mustard Dip",
                description: "Honey Mustard Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27673,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 88,
                title: "Sour Cream Dip",
                description: "Sour Cream Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27674,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 89,
                title: "Tomato Dip",
                description: "Tomato Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27675,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 90,
                title: "Garlic & Herbs Dip",
                description: "Garlic & Herbs Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27676,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
      {
        id: 193,
        title: "Seasonal Offer",
        slug: "seasonal-offer",
        description: "Seasonal Offer",
        price_takeaway: 2999,
        price_delivery: 2999,
        image:
          "https://backend.italianpizzas.co.uk/images/047f29373091cc501b52ae6b7a23d488.png",
        visible_in: "both",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 2389,
            title: 'Select First Medium Pizzas 12"',
            basket_title: "pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 5145,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5146,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5147,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5148,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5149,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5150,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5151,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5152,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5153,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5154,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5155,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5156,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5157,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5158,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5159,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5160,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5161,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5162,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5163,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 5164,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5165,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5166,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Western Bbq",
                description:
                  "Red Onions, Mixed Peppers, Mexican Chicken, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5167,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 165,
                title: "Bbq Beef",
                description: "Bbq Sauce, Red Onions, Fresh Garlic, Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5168,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2390,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5503,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5504,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5505,
                    size_id: null,
                    price_takeaway: 200,
                    price_delivery: 200,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5506,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
            ],
          },
          {
            id: 2391,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 1,
            addons: [
              {
                id: 50,
                title: "Mozzarella Cheese",
                description: "Mozzarella Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27436,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27437,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27438,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27439,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27440,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27441,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27442,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27443,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27444,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27445,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27446,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27447,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27448,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27449,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27450,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27451,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27452,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27453,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27454,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27455,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27456,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27457,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27458,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27459,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27460,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 75,
                title: "Anchovies",
                description: "Anchovies",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27461,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27462,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27463,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27464,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 79,
                title: "Oregano",
                description: "Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27465,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 80,
                title: "Burger Sauce",
                description: "Burger Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27466,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
            ],
          },
          {
            id: 2392,
            title: 'Select Second Medium Pizzas 12"',
            basket_title: "pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 5169,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5170,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5171,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5172,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5173,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5174,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5175,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5176,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5177,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5178,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5179,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5180,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5181,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5182,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5183,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5184,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5185,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5186,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5187,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 5188,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5189,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5190,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Western Bbq",
                description:
                  "Red Onions, Mixed Peppers, Mexican Chicken, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5191,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 165,
                title: "Bbq Beef",
                description: "Bbq Sauce, Red Onions, Fresh Garlic, Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5192,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2393,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5507,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5508,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5509,
                    size_id: null,
                    price_takeaway: 200,
                    price_delivery: 200,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5510,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
            ],
          },
          {
            id: 2394,
            title: "Select Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 1,
            addons: [
              {
                id: 50,
                title: "Mozzarella Cheese",
                description: "Mozzarella Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27467,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27468,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27469,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27470,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27471,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27472,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27473,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27474,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27475,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27476,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27477,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27478,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27479,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27480,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27481,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27482,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27483,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27484,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27485,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27486,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27487,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27488,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27489,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27490,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27491,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 75,
                title: "Anchovies",
                description: "Anchovies",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27492,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27493,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27494,
                    size_id: null,
                    price_takeaway: 150,
                    price_delivery: 150,
                  },
                ],
              },
            ],
          },
          {
            id: 2395,
            title: "Select Classic Sides",
            basket_title: "Classic Sides",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 7,
            required: 1,
            products: [
              {
                id: 76,
                title: "Chicken Nuggets",
                description: "Chicken Nuggets (6 Pcs + Dip)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5193,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 78,
                title: "Chips",
                description: "Chips",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5194,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 79,
                title: "Cheesy Chips",
                description: "Cheesy Chips",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5195,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 80,
                title: "Curly Fries + Dip",
                description: "Curly Fries + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 5196,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 84,
                title: "Potato Wedges + Dip",
                description: "Potato Wedges + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 5197,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 87,
                title: "Onion Rings (10 Pcs)",
                description: "Onion Rings (10 Pcs)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5198,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 88,
                title: "Jalapeno Cheesy Peppers (5 Pcs)",
                description: "Jalapenos Cheesy Peppers (5 Pcs)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5199,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 89,
                title: "Mozzarella Sticks",
                description: "Mozzarella Sticks",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5200,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 90,
                title: "Garlic Mushroom (7 Pcs + Dip)",
                description: "Garlic Mushroom (7 Pcs + Dip)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5201,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 139,
                title: "Garlic Bread",
                description: "Garlic Bread",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5202,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 140,
                title: "Garlic Bread With Cheese",
                description: "Garlic Bread With Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5203,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2396,
            title: "Please select dip",
            basket_title: "Dip",
            free_items: 0,
            max_items: 1,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 8,
            required: 0,
            addons: [
              {
                id: 84,
                title: "BBQ Dip",
                description: "BBQ Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27495,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
              {
                id: 85,
                title: "Sweet Chili Dip",
                description: "Sweet Chili Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27496,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
              {
                id: 86,
                title: "Hot Chili Dip",
                description: "Hot Chili Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27497,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
              {
                id: 87,
                title: "Honey Mustard Dip",
                description: "Honey Mustard Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27498,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
              {
                id: 88,
                title: "Sour Cream Dip",
                description: "Sour Cream Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27499,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
              {
                id: 89,
                title: "Tomato Dip",
                description: "Tomato Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27500,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
              {
                id: 90,
                title: "Garlic & Herbs Dip",
                description: "Garlic & Herbs Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 27501,
                    size_id: null,
                    price_takeaway: 40,
                    price_delivery: 40,
                  },
                ],
              },
            ],
          },
          {
            id: 2397,
            title: "Select First Haagen Dazs (100 ml)",
            basket_title: "First ICE CREAM",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 8,
            required: 1,
            options: [
              {
                id: 123,
                title: "Belgian Chocolate",
                description: "Belgian Chocolate",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5511,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 124,
                title: "Cookies & Cream",
                description: "Cookies & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5512,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 125,
                title: "Vanilla",
                description: "Vanilla",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5513,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 157,
                title: "Macadamia Nut Brittle",
                description: "Macadamia Nut Brittle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5514,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 158,
                title: "Pralines & Cream",
                description: "Pralines & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5515,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 159,
                title: "Summer Berries & Cream",
                description: "Summer Berries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5516,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Mango & Raspberry",
                description: "Mango & Raspberry",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5517,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 161,
                title: "Blueberries & Cream",
                description: "Blueberries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5518,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 162,
                title: "Strawberry & Cream",
                description: "Strawberry & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5519,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2398,
            title: "Select Second Haagen Dazs (100 ml)",
            basket_title: "Second ICE CREAM",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 10,
            required: 1,
            options: [
              {
                id: 120,
                title: "Strawberry & White Choclate",
                description: "Strawberry & White Choclate",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5520,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Belgian Chocolate",
                description: "Belgian Chocolate",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5521,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 124,
                title: "Cookies & Cream",
                description: "Cookies & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5522,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 125,
                title: "Vanilla",
                description: "Vanilla",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5523,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 157,
                title: "Macadamia Nut Brittle",
                description: "Macadamia Nut Brittle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5524,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 158,
                title: "Pralines & Cream",
                description: "Pralines & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5525,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 159,
                title: "Summer Berries & Cream",
                description: "Summer Berries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5526,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Mango & Raspberry",
                description: "Mango & Raspberry",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5527,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 161,
                title: "Blueberries & Cream",
                description: "Blueberries & Cream",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5528,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2399,
            title: "Select Soft Drink",
            basket_title: "Drink",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 11,
            required: 1,
            options: [
              {
                id: 104,
                title: "Diet Coke Bottle",
                description: "Diet Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5529,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Pepsi Bottle",
                description: "Pepsi Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5530,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Orange Tango Bottle",
                description: "Orange Tango Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5531,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "7UP Bottle",
                description: "7UP Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5532,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Coke Bottle",
                description: "Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5533,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
      {
        id: 136,
        title: "Meal Box 3",
        slug: "meal-box-3",
        description: "Meal Box 3",
        price_takeaway: 2299,
        price_delivery: 2299,
        image:
          "https://backend.italianpizzas.co.uk/images/b23d48f30e3df551533659c135edfdd4.png",
        visible_in: "both",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 2175,
            title: 'Any Large 15" Pizza',
            basket_title: "Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 4052,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4053,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4054,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4055,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4056,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4057,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4058,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4059,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4060,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4061,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4062,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4063,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4064,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4065,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4066,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4067,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4068,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4069,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4070,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 4071,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4072,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4073,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Western Bbq",
                description:
                  "Red Onions, Mixed Peppers, Mexican Chicken, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4074,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 165,
                title: "Bbq Beef",
                description: "Bbq Sauce, Red Onions, Fresh Garlic, Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4075,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2176,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5118,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5119,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5120,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5121,
                    size_id: null,
                    price_takeaway: 400,
                    price_delivery: 400,
                  },
                ],
              },
            ],
          },
          {
            id: 2177,
            title: "Please Select addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 0,
            addons: [
              {
                id: 51,
                title: "Bacon",
                description: "Bacon",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26074,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26075,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26076,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26077,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26078,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26079,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26080,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26081,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26082,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26083,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26084,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26085,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26086,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26087,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26088,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26089,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26090,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26091,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26092,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26093,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26094,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26095,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26096,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26097,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 75,
                title: "Anchovies",
                description: "Anchovies",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26098,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26099,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26100,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26101,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26102,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26103,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26104,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
            ],
          },
          {
            id: 2178,
            title: "Portion of Garlic Bread",
            basket_title: "Garlic Bread",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            options: [
              {
                id: 142,
                title: "Garlic Bread",
                description: "Garlic Bread",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5122,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2179,
            title: "Portion of Potato Wedges",
            basket_title: "Potato Wedges",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 5,
            required: 1,
            products: [
              {
                id: 84,
                title: "Potato Wedges + Dip",
                description: "Potato Wedges + Dip",
                no_of_free_addons: "1",
                price: [
                  {
                    id: 4076,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2180,
            title: "Select Soft Drink",
            basket_title: "Soft Drink",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 1,
            options: [
              {
                id: 104,
                title: "Diet Coke Bottle",
                description: "Diet Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5123,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Pepsi Bottle",
                description: "Pepsi Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5124,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Orange Tango Bottle",
                description: "Orange Tango Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5125,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "7UP Bottle",
                description: "7UP Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5126,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Coke Bottle",
                description: "Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 5127,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2181,
            title: "Please select dip",
            basket_title: "Dip",
            free_items: 0,
            max_items: 1,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: null,
            required: 0,
            addons: [
              {
                id: 84,
                title: "BBQ Dip",
                description: "BBQ Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26105,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 85,
                title: "Sweet Chili Dip",
                description: "Sweet Chili Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26106,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 86,
                title: "Hot Chili Dip",
                description: "Hot Chili Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26107,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 87,
                title: "Honey Mustard Dip",
                description: "Honey Mustard Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26108,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 88,
                title: "Sour Cream Dip",
                description: "Sour Cream Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26109,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 89,
                title: "Tomato Dip",
                description: "Tomato Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26110,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 90,
                title: "Garlic & Herbs Dip",
                description: "Garlic & Herbs Dip",
                no_of_free_addons: null,
                price: [
                  {
                    id: 26111,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
      {
        id: 135,
        title: "Meal Box 4",
        slug: "meal-box-4",
        description: "Meal Box 4",
        price_takeaway: 2399,
        price_delivery: 2399,
        image:
          "https://backend.italianpizzas.co.uk/images/07f89426a13ce3d5c7e14e1dbba186f9.png",
        visible_in: "both",
        discounts: [],
        allergens: [],
        clickables: [],
        tiers: [
          {
            id: 1996,
            title: 'Select Any 15" Pizza',
            basket_title: "Pizza",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 1,
            required: 1,
            products: [
              {
                id: 95,
                title: "Margherita",
                description: "Mozzarella Cheese & Tomato Sauce",
                no_of_free_addons: "2",
                price: [
                  {
                    id: 3331,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 97,
                title: "Meaty Hot",
                description:
                  "Spicy Beef, Ham, Pepperoni, Spicy Pork & Green Chilli",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3332,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 98,
                title: "Meat Feast",
                description: "Spicy Beef, Ham, Pepperoni & Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3333,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 99,
                title: "Super Pepperoni",
                description: "Double Pepperoni & Extra Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3334,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 100,
                title: "Veg Pepperoni",
                description: "Pepperoni, Red Onions & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3335,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 102,
                title: "Bbq Sizzler",
                description:
                  "Chargrilled Chicken, Red Onions, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3336,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 103,
                title: "Vegetarian Volcano",
                description:
                  "Red Onions, Sweetcorn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3337,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 104,
                title: "Bbq Original",
                description:
                  "Bbq Chicken, Green Peppers, Fried Onions & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3338,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Hot Veggie",
                description:
                  "Red Onions, Mixed Peppers, Mushrooms, Black Olives, Jalapenos & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3339,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Premium Veggie",
                description:
                  "Red Onions, Sweet Corn, Mixed Peppers, Mushrooms & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3340,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "Classic Pizza",
                description: "Mushrooms, Bacon & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3341,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Pollo",
                description: "Chicken & Mushrooms",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3342,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 110,
                title: "Chicken Supreme",
                description:
                  "Red Onions, Sweet Corn, Tandoori Chicken & Bbq Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3343,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 111,
                title: "Coriander Chilli Chicken",
                description:
                  "Red Onion, Tikka Chicken, Green Chilli, Fresh Coriander & Garlic Sauce)",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3344,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 113,
                title: "Mexican Heat Wave",
                description:
                  "Red Onions, Green Peppers, Green Chilli, Pepperoni, Spicy Beef & Sliced Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3345,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 114,
                title: "Meatball Pizza",
                description: "Meatballs, Red Peppers, Fresh Garlic & Oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3346,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 116,
                title: "Italian Garlic Supreme",
                description:
                  "Red Onions, Mushrooms, Pepperoni, Italian Sausage, Fresh Garlic & Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3347,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 117,
                title: "House Special",
                description:
                  "Red Onions, Mushrooms, Sweetcorn, Green Peppers, Spicy Beef, Pepperoni & Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3348,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 118,
                title: "Farmhouse",
                description: "Ham & Mashrrom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3349,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 121,
                title: "Free Choice",
                description: "4 Toppings Of Your Choice",
                no_of_free_addons: "4",
                price: [
                  {
                    id: 3350,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 122,
                title: "Cheesy Garlic Bread Pizza",
                description: "Mozzarella Cheese & Garlic Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3351,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 123,
                title: "Hawaiian Pizza",
                description: "Hawaiian Pizza",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3352,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 160,
                title: "Western Bbq",
                description:
                  "Red Onions, Mixed Peppers, Mexican Chicken, Bacon & Bbq Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3353,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 165,
                title: "Bbq Beef",
                description: "Bbq Sauce, Red Onions, Fresh Garlic, Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3354,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1997,
            title: "Select an Option",
            basket_title: "Crust",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 2,
            required: 1,
            options: [
              {
                id: 148,
                title: "Deep Crust",
                description: "Deep Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4618,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 149,
                title: "Thin Crust",
                description: "Thin Crust",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4619,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 150,
                title: "Stuffed Crust Cheese",
                description: "Stuffed Crust Cheese",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4620,
                    size_id: null,
                    price_takeaway: 300,
                    price_delivery: 300,
                  },
                ],
              },
              {
                id: 151,
                title: "Stuffed Crust Sausage",
                description: "Stuffed Crust Sausage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4621,
                    size_id: null,
                    price_takeaway: 400,
                    price_delivery: 400,
                  },
                ],
              },
            ],
          },
          {
            id: 1998,
            title: "Select an Addons",
            basket_title: "Addons",
            free_items: 0,
            max_items: 10,
            type: "Addon",
            type_id: 4,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 3,
            required: 0,
            addons: [
              {
                id: 52,
                title: "BBQ Chicken",
                description: "BBQ Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24236,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 53,
                title: "Tandoori Chicken",
                description: "Tandoori Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24237,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 54,
                title: "Chargrilled Chicken",
                description: "Char grilled Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24238,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 55,
                title: "Pepperoni",
                description: "Pepperoni",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24239,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 56,
                title: "Salami",
                description: "Salami",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24240,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 57,
                title: "Ham",
                description: "Ham",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24241,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 58,
                title: "Spicy Pork",
                description: "Spicy Pork",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24242,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 59,
                title: "Spicy Beef",
                description: "Spicy Beef",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24243,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 60,
                title: "Mashroom",
                description: "Mashroom",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24244,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 61,
                title: "Red Onions",
                description: "Red Onions",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24245,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 62,
                title: "Green Pepper",
                description: "Green Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24246,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 63,
                title: "Red Pepper",
                description: "Red Pepper",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24247,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 64,
                title: "Sweet Corn",
                description: "Sweet Corn",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24248,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 65,
                title: "Pineapple",
                description: "Pineapple",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24249,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 66,
                title: "Jalapenos",
                description: "Jalapenos",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24250,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 67,
                title: "Black Olives",
                description: "Black Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24251,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 68,
                title: "Green Olives",
                description: "Green Olives",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24252,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 69,
                title: "Italian Sussage",
                description: "Italian Sussage",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24253,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 70,
                title: "Fresh Garlic",
                description: "Fresh Garlic",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24254,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 71,
                title: "Fresh Tomato",
                description: "Fresh Tomato",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24255,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 72,
                title: "Green Chili",
                description: "Green Chili",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24256,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 73,
                title: "Fresh Coriander",
                description: "Fresh Coriander",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24257,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 74,
                title: "Meat Balls",
                description: "Meat Balls",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24258,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 76,
                title: "BBQ Sauce",
                description: "BBQ Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24259,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 77,
                title: "Garlic Mayo Sauce",
                description: "Garlic Mayo Sauce",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24260,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 78,
                title: "Artichoke",
                description: "Artichoke",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24261,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 92,
                title: "Garlic Parsley Sauce & Oregano",
                description: "garlic parsley sauce & oregano",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24262,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 93,
                title: "Tikka Chicken",
                description: "Tikka Chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24263,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
              {
                id: 96,
                title: "Mexican chicken",
                description: "Mexican chicken",
                no_of_free_addons: null,
                price: [
                  {
                    id: 24264,
                    size_id: null,
                    price_takeaway: 250,
                    price_delivery: 250,
                  },
                ],
              },
            ],
          },
          {
            id: 1999,
            title: "Portion of Wings",
            basket_title: "Wings",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 4,
            required: 1,
            products: [
              {
                id: 178,
                title: "Chicken Wings Meal",
                description: "Chicken Wings Meal",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3355,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2000,
            title: "Portion of Garlic Bread",
            basket_title: "Garlic Bread",
            free_items: 0,
            max_items: 1,
            type: "Product",
            type_id: 1,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 5,
            required: 1,
            products: [
              {
                id: 139,
                title: "Garlic Bread",
                description: "Garlic Bread",
                no_of_free_addons: null,
                price: [
                  {
                    id: 3356,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2001,
            title: "Select Soft Drink",
            basket_title: "Soft Drink",
            free_items: 0,
            max_items: 1,
            type: "Option",
            type_id: 3,
            classification: "General",
            classification_id: 1,
            tag: null,
            tag_id: null,
            priority: 6,
            required: 1,
            options: [
              {
                id: 104,
                title: "Diet Coke Bottle",
                description: "Diet Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4622,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 105,
                title: "Pepsi Bottle",
                description: "Pepsi Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4623,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 106,
                title: "Orange Tango Bottle",
                description: "Orange Tango Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4624,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 107,
                title: "7UP Bottle",
                description: "7UP Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4625,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
              {
                id: 108,
                title: "Coke Bottle",
                description: "Coke Bottle",
                no_of_free_addons: null,
                price: [
                  {
                    id: 4626,
                    size_id: null,
                    price_takeaway: 0,
                    price_delivery: 0,
                  },
                ],
              },
            ],
          },
        ],
        specific_tiers: [],
      },
    ],
  });
}
