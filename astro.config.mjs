import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	integrations: [
		starlight({
			title: "WkndNite Tech",
			favicon: "/FaWikipediaW.svg",
			head: [{ tag: "title", content: "浮点世界" }],
			social: {
				github: "https://github.com/WkndNite",
			},
			sidebar: [
				{
					label: "一些介绍",
					link: "intro",
				},
				{
					label: "操作系统",
					autogenerate: { directory: "operating-system" },
					collapsed: true,
				},
				{
					label: "JavaScript",
					autogenerate: { directory: "javascript" },
					collapsed: true,
				},
				{
					label: "Vue",
					autogenerate: { directory: "vue" },
					collapsed: true,
				},
				{
					label: "原则与规约",
					autogenerate: { directory: "convention" },
					collapsed: true,
				},
				{
					label: "架构与工具",
					autogenerate: { directory: "architecture" },
					collapsed: true,
				},
				{
					label: "Starlight 开发实践",
					autogenerate: { directory: "starlight-dev" },
					collapsed: true,
				},
				{
					label: "持续更新中……",
					items: [],
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
