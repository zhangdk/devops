# Git Flow 版本管理指南

## 介绍

Git Flow 是一种基于分支的开发模型，旨在简化和优化软件开发过程中的版本管理。它通过定义一组明确的分支策略，帮助开发团队更好地组织和管理代码库。

## 分支模型

Git Flow 主要使用以下几种分支：

1. **主分支（`main`）**
   - 用于存放生产环境的代码。
   - 任何时候都应该保持稳定和可发布状态。

2. **开发分支（`develop`）**
   - 用于集成所有开发分支的代码。
   - 包含最新的开发进展，通常是下一个发布版本的基础。

3. **功能分支（`feature`）**
   - 从 `develop` 分支创建，用于开发新功能。
   - 命名格式：`feature/功能名称`
   - 完成后合并回 `develop`。

4. **发布分支（`release`）**
   - 从 `develop` 分支创建，用于准备新版本的发布。
   - 命名格式：`release/版本号`
   - 允许进行最后的测试和小的修复。
   - 完成后合并到 `main` 和 `develop`，并打上版本标签。

5. **修补分支（`hotfix`）**
   - 从 `main` 分支创建，用于修复生产环境中的紧急问题。
   - 命名格式：`hotfix/问题描述`
   - 完成后合并到 `main` 和 `develop`，并打上版本标签。

## 工作流程

1. **开始新功能**
   - 从 `develop` 分支创建一个新的功能分支。
   - 开发完成后，合并回 `develop`。

   ```bash
   git checkout develop
   git checkout -b feature/awesome-feature
   # 开发工作
   git commit -m "Add awesome feature"
   git checkout develop
   git merge feature/awesome-feature
   git branch -d feature/awesome-feature
   ```

2. **准备发布**
   - 从 `develop` 分支创建一个发布分支。
   - 进行最后的测试和修复。
   - 合并到 `main` 和 `develop`，并打上版本标签。

   ```bash
   git checkout develop
   git checkout -b release/1.0.0
   # 测试和修复
   git commit -m "Prepare release 1.0.0"
   git checkout main
   git merge release/1.0.0
   git tag -a 1.0.0 -m "Release 1.0.0"
   git checkout develop
   git merge release/1.0.0
   git branch -d release/1.0.0
   ```

3. **修复紧急问题**
   - 从 `main` 分支创建一个修补分支。
   - 修复问题后，合并到 `main` 和 `develop`，并打上版本标签。

   ```bash
   git checkout main
   git checkout -b hotfix/urgent-fix
   # 修复工作
   git commit -m "Fix urgent issue"
   git checkout main
   git merge hotfix/urgent-fix
   git tag -a 1.0.1 -m "Hotfix 1.0.1"
   git checkout develop
   git merge hotfix/urgent-fix
   git branch -d hotfix/urgent-fix
   ```

## 在 `main` 分支上使用标签

在 Git Flow 中，`main` 分支用于存放生产环境的稳定代码。每次合并发布或修补分支到 `main` 后，通常会创建一个标签来标记这个版本。

### 创建标签

确保你在 `main` 分支上，并且已经合并了所有需要的更改。然后使用以下命令创建一个带有注释的标签：

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

### 推送标签

将标签推送到远程仓库：

```bash
git push origin v1.0.0
```

或者推送所有本地标签：

```bash
git push origin --tags
```

通过在 `main` 分支上使用标签，团队可以清晰地标识每个生产版本，方便版本管理和回溯。

## 总结

Git Flow 提供了一种结构化的分支管理方法，适合于需要频繁发布和维护多个版本的软件项目。通过遵循 Git Flow 的分支策略，团队可以更有效地管理代码库，减少合并冲突，并确保代码的稳定性和可发布性。
