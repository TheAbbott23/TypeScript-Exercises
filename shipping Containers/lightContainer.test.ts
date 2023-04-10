import LightContainer from "./lightContainer";

describe ("light container class", () => {
    test("should set properties from constructor", () => {
        const newLightContainer = new LightContainer("San Jose", 175);
        expect(newLightContainer.destination).toEqual("San Jose");
        expect(newLightContainer.cargoWeight).toEqual(175);
    });
    test("different cargo weight from constructor", () => {
        const newLightContainer = new LightContainer("San Jose");
        expect(newLightContainer.destination).toEqual("San Jose");
        expect(newLightContainer.cargoWeight).toEqual(0);
    });
});