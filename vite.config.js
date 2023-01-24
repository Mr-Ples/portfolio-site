import { resolve } from "path";

/** @type {import("vite").UserConfig} */
export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				thankyou: resolve(__dirname, "thank-you.html"),
				payment: resolve(__dirname, "payment.html")
			}
		}
	}
}