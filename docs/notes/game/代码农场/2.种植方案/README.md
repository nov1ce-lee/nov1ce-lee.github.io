---
title: 种植方案
permalink: /notes/games/code-farm/planting/
icon: mdi:sprout-outline
createTime: 2026/09/23 16:34:36
---

# 种植方案

除了草会在草地上自动生长，其他作物都需要使用 `plant()` 种植

种植会直接消耗对应资源，当前成本可以用 `get_cost(Entities.xxx)` 查询，不用提前购买种子

## 地面

- `Grounds.Grassland`：默认地面，会自动长出草
- `Grounds.Soil`：使用 `till()` 将草地翻成土壤，再次使用会变回草地
- 胡萝卜、南瓜、向日葵和仙人掌需要种在土壤上
- 灌木和树可以种在草地或土壤上

## 通用机制

### 浇水

地面水位范围为 `0 ~ 1`，水位越高植物长得越快

可以用 `get_water()` 获取当前水位，使用 `use_item(Items.Water)` 浇水

### 肥料与感染

肥料会减少植物剩余的生长时间，但使用肥料长成的植物会被感染

收获感染植物时，一半产量会变成 `Items.Weird_Substance`，后续生成迷宫也需要这种资源

### 混合种植

草、灌木、树和胡萝卜可以通过伴生植物提高产量

使用 `get_companion()` 可以获取当前植物需要的伴生植物类型和坐标，南瓜、向日葵与仙人掌不使用这套机制

## 基础作物

- [草与干草](./1.草与干草.md)
- [灌木与树木](./2.灌木与树木.md)
- [胡萝卜](./3.胡萝卜.md)

## 进阶作物

- [南瓜](./4.南瓜.md)
- [向日葵](./5.向日葵.md)
- [仙人掌](./6.仙人掌.md)

## 每篇统一结构

- 机制与前置解锁
- 基础种植方案
- 整片农场方案
- 多无人机方案
- 性能测试
- 相关成就与排行榜

## 参考

- [Plant](https://thefarmerwasreplaced.wiki.gg/wiki/Plant)
- [Plant growth](https://thefarmerwasreplaced.wiki.gg/wiki/Plant_growth)
- [Polyculture](https://thefarmerwasreplaced.wiki.gg/wiki/Polyculture)

