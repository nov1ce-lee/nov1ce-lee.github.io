---
title: 使用AI大模型实现自然语言控制浏览器自动搜索
tags:
- MCP
- LLMs
createTime: 2025/04/07 21:01:35
permalink: /blog/mcp-server/
---

### 环境搭建
- 安装Playwright
```bash
pip install playwright
playwright install  # 自动安装浏览器驱动
```

### 用户客户端配置
:::tabs
@tab Vscode Cline
- 安装Cline插件     
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215843948.png)

- 配置启动参数      
点击==installed==，打开配置文件
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215855495.png)
```json:no-line-numbers
{
  "mcpServers": {
    "playwright": {
      "autoApprove": [
        "start_codegen_session",
        "end_codegen_session",
        "get_codegen_session",
        "clear_codegen_session",
        "playwright_navigate",
        "playwright_screenshot",
        "playwright_click",
        "playwright_iframe_click",
        "playwright_fill",
        "playwright_select",
        "playwright_hover",
        "playwright_evaluate",
        "playwright_console_logs",
        "playwright_close",
        "playwright_get",
        "playwright_post",
        "playwright_put",
        "playwright_patch",
        "playwright_delete",
        "playwright_expect_response",
        "playwright_assert_response",
        "playwright_custom_user_agent",
        "playwright_get_visible_text",
        "playwright_get_visible_html",
        "playwright_go_back",
        "playwright_go_forward",
        "playwright_drag",
        "playwright_press_key",
        "playwright_save_as_pdf"
      ],
      "disabled": true,
      "timeout": 60,
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "@executeautomation/playwright-mcp-server"
      ],
      "transportType": "stdio"
    }
  }
}
```
- 配置大模型API

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215902363.png)
:::

### 效果展示
- 执行自动化任务    
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215907200.png)