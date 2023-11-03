import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("should increase concert pass quality", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 1, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
  });
});
