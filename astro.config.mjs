import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import catppuccin from "starlight-theme-catppuccin";

export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
				catppuccin({ dark: "macchiato-sky", light: "latte-sky" }),
			],
			title: "WkndNite Tech",
			favicon: "/site-logo.svg",
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
					label: "CSS",
					autogenerate: { directory: "css" },
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
					label: "前端工程化",
					autogenerate: { directory: "architecture" },
					collapsed: true,
				},
				{
					label: "Docker",
					autogenerate: { directory: "docker" },
					collapsed: true,
				},
				{
					label: "Starlight 开发实践",
					autogenerate: { directory: "starlight-dev" },
					collapsed: true,
				},
				{
					label: "LCDP 开发实践",
					autogenerate: { directory: "low-code-dev-platform" },
					collapsed: true,
				},
				// {
				// 	label:"VS Code 插件开发",
				// 	autogenerate: { directory: "vsc-extension" },
				// 	collapsed: true,
				// },
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
