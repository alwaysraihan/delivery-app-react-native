export default {
    name: "restaurant",
    title: "Restaurant",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Restaurant Name",
            type: "string",
            ValidityState: (Rule) => Rule.requied(),
        },
        {
            name: "short_description",
            title: "Short Description.",
            type: "string",
            ValidityState: (Rule) => Rule.requied(),
        },
        {
            name: "Image",
            title: "Image of the Restaurant",
            type: "image",
            ValidityState: (Rule) => Rule.requied(),
        },
    ],
};
