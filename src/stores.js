import { writable } from "svelte/store";

export const enlargedImage = writable({ src: "", alt: "", presented: false });

export function enlargeImage(event) {
	enlargedImage.set({
		src: event.target.src,
		alt: event.target.alt,
		presented: true
	});
}
