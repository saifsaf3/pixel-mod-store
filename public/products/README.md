# Product photos

Put website product photos in this folder, ideally as WebP or JPG files around
1600px wide.

For the two ready-to-ship products:

1. Add `public/products/ready/white-psp-1000.webp`
2. Add `public/products/ready/smoke-switch-lite.webp`
3. Open `lib/ready-products.ts` and add the corresponding path to each item:
   `image: "/products/ready/white-psp-1000.webp"`

The cards automatically use the real photo when an `image` path is present and
fall back to the illustrated placeholder if the image cannot be loaded.

For product-page and catalogue photos, add an `image` path to any gallery entry
in `lib/products.ts`:

```ts
{ 
  label: "Front view",
  color: "#202126",
  secondary: "#ff6b4a",
  image: "/products/psp-1000/front.webp"
}
```

The first gallery image is used on the catalogue card. All gallery images appear
as selectable thumbnails on the product page. If an image path is missing or
fails to load, the illustrated console placeholder remains visible.
