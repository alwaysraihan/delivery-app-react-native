export default {
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name of dish",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            title: "short Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "price",
            title: "Pric of the dish in BDT",
            type: "number",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "image",
            title: "Image of the Dish",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
