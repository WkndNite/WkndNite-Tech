import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	integrations: [
		starlight({
			title: "WkndNite Tech",
			social: {
				github: "https://github.com/WkndNite",
			},
			sidebar: [
				{
					label: "一些介绍",
					link: "intro",
				},
				{
					label: "Starlight 开发实践",
					autogenerate: { directory: "starlight-dev" },
					collapsed: true,
				},
				{
					label:"设计规约",
					autogenerate: { directory: "convention" },
					collapsed: true,
				},
				{
					label: "持续更新中……",
					link: "",
				},
			],
			locales: {
				root: {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
		}),
	],
});
