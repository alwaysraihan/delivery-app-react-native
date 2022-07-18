export default {
    name: "restaurant",
    title: "Restaurant",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Restaurant Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            title: "Short Description.",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "Image",
            title: "Image of the Restaurant",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "long",
            title: "Latitude of the Restaurant",
            type: "number",
        },
        {
            name: "address",
            title: "Restaurant Address",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "rating",
            title: "Enter a Rating from (3-5 Stars)",
            type: "number",
            validation: (Rule) =>
                Rule.required()
                    .min(1)
                    .max(5)
                    .error("Please enter a Value between 1 and 5"),
        },
        {
            name: "type",
            title: "Category",
            type: "reference",
            validation: (Rule) => Rule.required(),
            to: [{ type: "category" }],
        },
        {
            name: "dishes",
            title: "Dishes",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [{ type: "reference", to: [{ type: "category" }] }],
        },
    ],
};
