export default {
    name: "featured",
    title: "Featuerd",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Featured Category name",
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
            name: "restaurants",
            title: "Restaurants",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [{ type: "reference", to: [{ type: "restaurant" }] }],
        },
    ],
};
