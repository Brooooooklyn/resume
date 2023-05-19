<block class="experience-block">
  <p><span class="experience-sub-title">前端实习</span><span class="experience-sub-time">2015.2 ~ 2016.6</span></p>
</block>

- 负责开发 Teambition Mobile Web，包括:

  - [https://m.teambition.com](https://m.teambition.com)
  - [https://weixin.teambition.com](https://weixin.teambition.com)

- 开发与维护 [Teambition Web](https://www.teambition.com/projects)

<block class="experience-block">
  <p><span class="experience-sub-title">前端工程师</span><span class="experience-sub-time">2016.7 ~ 2016.12</span></p>
</block>

- 负责设计 Teambition 数据层重构方案，在此前提下设计了 [Teambition SDK](https://github.com/teambition/teambition-sdk)
- 协助前端架构组的 `Angular 2` 重构计划，为团队内部成员培训和推广 `RxJS` 与 `TypeScript`
- 设计了 [ReactiveDB](https://github.com/reactivedb/core) 并在此基础上完善了 Teambition 的数据同步方案

<block class="experience-block">
  <p>
    <span class="experience-sub-title">
      高级前端工程师(代理架构师)
    </span>
    <span class="experience-sub-time">
      2017.1 ~ 2017.6
    </span>
  </p>
</block>

- 前端项目管理, CR/发布/上线
- 负责搭建前端团队内部的持续集成，自动化部署工具
- 辅助各业务组的技术选型，框架搭建
- 负责推动 Teambition 前端重构，从 `CoffeeScript + Backbone + jQuery` 到 `React + Redux + RxJS + TypeScript`
- 解决全团队关于 `TypeScript` `RxJS` 相关的问题

==split==

- 基础架构改善，研发效率提升

==split==

<block class="experience-block">
  <p><span class="experience-sub-title">研发效率与代码质量</span></p>
</block>

- 在公司内推行 `BDD` 模式开发
- 搭建了 ARKIE 的前端日志监控系统
- 统一所有 NodeJS 服务架构与基础库，Monorepo 化，共享大部分基础代码
- 针对大规模推广活动 **系统整体 QPS 2000+** 进行压测，在线性能 Profile 与代码调优

<block class="experience-block">
  <p><span class="experience-sub-title">Infrastructure</span></p>
</block>

- 搭建了私有 `Gitlab` `cnpm` 等服务
- 负责 ARKIE 的所有项目 (20+ 个) 的 CI/CD pipeline 搭建与工程化改造
- 所有项目的 `Docker` 化与微服务架构设计
- 全站 https、CDN、http2
- 与运维一起推进 CI/CD 标准化，以及 **alpha/dev/staging/hotfix/production/私有部署** 多套环境的自动化部署机制

<block class="experience-block">
  <p><span class="experience-sub-title">NodeJS 架构</span></p>
</block>

- JavaScript -> TypeScript + Lint + Prettier + Unit Test
- 迁移核心项目从 Sails.js -> NestJS
- 一个 Node 端的 Canvas Renderer 项目重构，老的架构是 Puppetter + Screenshot，使用 [actix-web](https://github.com/actix/actix-web) + [cairo](https://github.com/gtk-rs/cairo) 重构

<block class="experience-block">
  <p><span class="experience-sub-title">团队建设</span></p>
</block>

- 主导团队招聘，组建团队
- 带团队。包括任务分配，技术输出和团队文化培养

==split==

<block class="experience-block">
  <p><span class="experience-sub-title">整站技术迁移</span></p>
</block>

- 全站 CDN & https & http2 迁移
- 整站的手动发布+传统单机云服务器架构到全站 Kubernetes
- Python/Node.js/Rust/Golang 等多种语言以及框架的微服务化设计, CI/CD 与自动化部署流程开发

<block class="experience-block">
  <p><span class="experience-sub-title">架构</span></p>
</block>

- Flutter App 整体架构设计
- 主导基于 k8s 的微服务架构设计
- NodeJS 微服务架构设计，gRPC、熔断、重试、监控、日志
- Web SSR 方案设计
- 前端技术选型与架构设计

<block class="experience-block">
  <p><span class="experience-sub-title">团队建设</span></p>
</block>

- 主导公司的技术招聘，包括前端、后端、运维
- 前端技术培训与分享
- k8s 与 Helm 相关的技术分享
- Scrum 培训

==split==

<block class="experience-block">
  <p><span class="experience-sub-title">负责 TikTok Web 架构设计与性能优化</span></p>
</block>

Performance First 与 Robust First 的架构设计, 带领团队从 0 开始重写 https://tiktok.com, 它是基于 `React`，`TypeScript`，`RxJS` 的 SSR 应用, 在 LCP, TTI 等前端性能指标上与旧版本相比有最多 3 倍以上的提升。
在 Server 端性能指标上有 2 倍以上的提升, 缩减生产环境服务器核心数量大约 4000 个。TypeScript 类型覆盖 95% 以上, 极大减少了生产环境的 bug 数量与跨团队协作成本。

<block class="experience-block">
  <a href="https://perfsee.com/"><p><span class="experience-sub-title">Perfsee 项目</span></p></a>
</block>

- 项目立项到全公司推广
- 团队搭建
- 架构与产品设计

==split==

<block class="experience-block">
  <p><span class="experience-sub-title">Turbopack & Next.js</span></p>
</block>

Turbopack 与 Next.js 项目的 Rust 相关基础建设，CI 自动化工具开发，Turbopack 核心业务逻辑: `turbopack-ecmascript` 与 `turbopack-fs` 等。