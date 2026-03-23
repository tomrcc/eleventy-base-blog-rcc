export default {
	tags: ["posts_fr"],
	layout: "layouts/post.njk",
	locale: "fr",
	eleventyComputed: {
		permalink: (data) => `/fr/blog/${data.page.fileSlug}/`,
		roseyRoot: (data) => `blog/${data.page.fileSlug}`,
	},
};
