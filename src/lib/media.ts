/**
 * Central manifest for all media (images, videos) hosted on Cloudinary.
 * Single source of truth: add, replace, or remove URLs here. Components reference by key.
 */

const CLOUDINARY_BASE = "https://res.cloudinary.com/drr8mqzdo";

export const media = {
  /** Logo */
  logoFinal: `${CLOUDINARY_BASE}/image/upload/v1769954433/logo-final_jbxg06.png`,

  /** Water pumps & projects */
  pump1: `${CLOUDINARY_BASE}/image/upload/v1769954436/pump1_bs7h5n.jpg`,
  pump2: `${CLOUDINARY_BASE}/image/upload/v1769954436/pump2_claaup.jpg`,
  pump3: `${CLOUDINARY_BASE}/image/upload/v1769954434/pump3_rrrkbg.jpg`,
  pump4: `${CLOUDINARY_BASE}/image/upload/v1769954434/pump4_u5eojq.jpg`,
  pump5: `${CLOUDINARY_BASE}/image/upload/v1769954435/pump5_u1twgg.jpg`,
  pump6: `${CLOUDINARY_BASE}/image/upload/v1769954435/pump6_gglnrx.jpg`,
  pump7: `${CLOUDINARY_BASE}/image/upload/v1769954435/pump7_vrg0se.jpg`,

  /** Community / masjid / wudu */
  wuduPlace: `${CLOUDINARY_BASE}/image/upload/v1769954437/wudu-place_uwp6vy.jpg`,
  masjid: `${CLOUDINARY_BASE}/image/upload/v1769954434/masjid_zri6gu.png`,
  seher: `${CLOUDINARY_BASE}/image/upload/v1769954435/seher_l6jh9w.png`,

  /** Ramadan / iftar drives (promo images) */
  ramadanDrive: `${CLOUDINARY_BASE}/image/upload/v1769954433/generate_a_few_images_shooeing_ramadan_drives_for_my_website_promotionseher_and_iftar_drives_image_1_1_hjs4fu.png`,
  iftarDrive: `${CLOUDINARY_BASE}/image/upload/v1769954433/give_them_as_seperate_images_image_4_zysibt.png`,
  /** Clothing (Ramadan section: single image; Clothing section: two images) */
  clothingDrive: `${CLOUDINARY_BASE}/image/upload/v1769954433/give_them_as_seperate_images_image_4_zysibt.png`,
  clothing1: `${CLOUDINARY_BASE}/image/upload/v1770218123/clothing1_upsa5k.jpg`,
  clothing2: `${CLOUDINARY_BASE}/image/upload/v1770218123/clothing2_f5q87y.jpg`,

  /** Videos */
  vid1: `${CLOUDINARY_BASE}/video/upload/v1769954433/vid1_irewif.mp4`,
  vid2: `${CLOUDINARY_BASE}/video/upload/v1769954435/vid2_lq5ar3.mp4`,
} as const;

/** Path-based assets – use asset() so VITE_ASSETS_URL or local public/ applies. Add Cloudinary URL to media above when available. */
export const mediaPaths = {
  // Add any future path-based assets here (e.g. "/some-image.png")
} as const;

export type MediaKey = keyof typeof media;
export type MediaPathKey = keyof typeof mediaPaths;
