export interface IProperty {
    propertyId: string;
    name: string;
}

export const getDefaultProperty = (): IProperty => ({
    propertyId: "",
    name: "",
});

export const getAllDummyProperties = (): IProperty[] => {
    return [
        { propertyId: "1", name: "The Grand Hotel" },
        { propertyId: "2", name: "Sunset Resort" },
        { propertyId: "3", name: "Mountain View Inn" },
        { propertyId: "4", name: "Beachfront Paradise" },
        { propertyId: "5", name: "Downtown Plaza Hotel" },
        { propertyId: "6", name: "Lakeside Retreat" },
        { propertyId: "7", name: "City Center Suites" },
        { propertyId: "8", name: "Airport Express Hotel" },
        { propertyId: "9", name: "Historic Mansion Inn" },
        { propertyId: "10", name: "Countryside Lodge" },
    ];
};
