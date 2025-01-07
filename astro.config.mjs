import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import catppuccin from "starlight-theme-catppuccin";
import starlightViewModes from "starlight-view-modes";
import starlightHeadingBadges from "starlight-heading-badges";
import liveCode from "astro-live-code";

export default defineConfig({
	integrations: [
		liveCode(),
		starlight({
			plugins: [
				starlightImageZoom(),
				starlightHeadingBadges(),
				catppuccin({ dark: "mocha-green", light: "latte-blue" }),
				starlightViewModes({
                    zenModeShowTableOfContents: true,
                    zenModeShowSwitchInTableOfContents: false,
					presentationModeShowSwitchInHeader:false,
                }),
			],
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
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
					autogenerate: { directory: "frontend-engineering" },
					collapsed: true,
				},
				{
					label: "软件架构",
					autogenerate: { directory: "software-architecture" },
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
				// {
				// 	label: "Soybean 基础创作",
				// 	autogenerate: { directory: "soybean-basis-dev" },
				// 	collapsed: true,
				// },
				{
					label: "LCDP 开发实践",
					autogenerate: { directory: "low-code-dev-platform" },
					collapsed: true,
				},
				{
					label:"VS Code 插件开发",
					autogenerate: { directory: "vsc-extension" },
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
