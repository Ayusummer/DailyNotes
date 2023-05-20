# TA0005-Defense Evasion(下)

## T1578 [Modify Cloud Compute Infrastructure](https://attack.mitre.org/techniques/T1578) 修改云计算基础结构

An adversary may attempt to modify a cloud account's compute service infrastructure to evade defenses. A modification to the compute service infrastructure can include the creation, deletion, or modification of one or more components such as compute instances, virtual machines, and snapshots.
攻击者可能会尝试修改云帐户的计算服务基础结构以绕过防御。对计算服务基础结构的修改可以包括创建、删除或修改一个或多个组件，例如计算实例、虚拟机和快照。

---

### T1578.001 [Create Snapshot](https://attack.mitre.org/techniques/T1578/001) 创建快照

An adversary may create a snapshot or data backup within a cloud account to evade defenses. A snapshot is a point-in-time copy of an existing cloud compute component such as a virtual machine (VM), virtual hard drive, or volume. An adversary may leverage permissions to create a snapshot in order to bypass restrictions that prevent access to existing compute service infrastructure, unlike in [Revert Cloud Instance](https://attack.mitre.org/techniques/T1578/004) where an adversary may revert to a snapshot to evade detection and remove evidence of their presence.
攻击者可能会在云帐户中创建快照或数据备份以逃避防御。快照是现有云计算组件（如虚拟机 （VM）、虚拟硬盘驱动器或卷）的时间点副本。攻击者可以利用权限创建快照，以绕过阻止访问现有计算服务基础架构的限制，这与在还原云实例中不同，在还原云实例中，攻击者可能会还原到快照以逃避检测并删除其存在的证据。

---

### T1578.002 [ Create Cloud Instance](https://attack.mitre.org/techniques/T1578/002) 创建云实例

An adversary may create a new instance or virtual machine (VM) within the compute service of a cloud account to evade defenses. Creating a new instance may allow an adversary to bypass firewall rules and permissions that exist on instances currently residing within an account. An adversary may [Create Snapshot](https://attack.mitre.org/techniques/T1578/001) of one or more volumes in an account, create a new instance, mount the snapshots, and then apply a less restrictive security policy to collect [Data from Local System](https://attack.mitre.org/techniques/T1005) or for [Remote Data Staging](https://attack.mitre.org/techniques/T1074/002).
攻击者可以在云帐户的计算服务中创建新的实例或虚拟机 （VM） 以逃避防御。创建新实例可能允许攻击者绕过当前驻留在账户中的实例上存在的防火墙规则和权限。攻击者可能会在账户中创建一个或多个卷的快照，创建新实例，挂载快照，然后应用限制较少的安全策略来从本地系统收集数据或进行远程数据暂存。

---

### T1578.003 [Delete Cloud Instance](https://attack.mitre.org/techniques/T1578/003) 删除云实例

An adversary may revert changes made to a cloud instance after they have performed malicious activities in attempt to evade detection and remove evidence of their presence. In highly virtualized environments, such as cloud-based infrastructure, this may be accomplished by restoring virtual machine (VM) or data storage snapshots through the cloud management dashboard or cloud APIs.
攻击者在执行恶意活动以试图逃避检测并删除其存在的证据后，可能会还原对云实例所做的更改。在高度虚拟化的环境（例如基于云的基础架构）中，可以通过云管理仪表板或云 API 还原虚拟机 （VM） 或数据存储快照来实现这一点。

---

### T1578.004[Revert Cloud Instance](https://attack.mitre.org/techniques/T1578/004) 恢复云实例

An adversary may revert changes made to a cloud instance after they have performed malicious activities in attempt to evade detection and remove evidence of their presence. In highly virtualized environments, such as cloud-based infrastructure, this may be accomplished by restoring virtual machine (VM) or data storage snapshots through the cloud management dashboard or cloud APIs.
攻击者在执行恶意活动以试图逃避检测并删除其存在的证据后，可能会还原对云实例所做的更改。在高度虚拟化的环境（例如基于云的基础架构）中，可以通过云管理仪表板或云 API 还原虚拟机 （VM） 或数据存储快照来实现这一点。

---

### Mitigations 缓解措施

- [M1047](https://attack.mitre.org/mitigations/M1047) [Audit](https://attack.mitre.org/mitigations/M1047) 审计

  定期监控用户权限，以确保只有预期用户才能修改云计算基础架构组件。

- [M1018](https://attack.mitre.org/mitigations/M1018) [User Account Management](https://attack.mitre.org/mitigations/M1018) 用户账户管理

  根据最低权限限制创建、删除和更改计算组件的权限。组织应限制组织内具有具有管理权限的 IAM 角色的用户数量，努力减少所有永久特权角色分配，并对 IAM 用户、角色和策略进行定期权利审查。 

  > - IAM用户是一种在AWS中创建的实体，它提供了一种与AWS资源交互的方式。IAM用户的主要目的是，它们可以登录到AWS管理控制台，并可以向AWS服务发出请求
  > - IAM用户可以具有不同的权限，用于控制它们可以在AWS中做什么和不能做什么。权限是通过权限策略来定义和管理的，权限策略可以附加到IAM用户本身或者它所属的IAM用户组上
  >
  > [AWS IAM Users Versus. IAM Roles: Which One Should You Use? --- AWS IAM 用户与IAM 角色：您应该使用哪一个？ (howtogeek.com)](https://www.howtogeek.com/devops/iam-users-vs-iam-roles-which-one-should-you-use/)

---

### 检测方案

- [DS0030](https://attack.mitre.org/datasources/DS0030) [ Instance](https://attack.mitre.org/datasources/DS0030) 

  - [Instance Creation](https://attack.mitre.org/datasources/DS0030/#Instance Creation) 实例创建

    创建新实例或 VM 是许多云环境中操作的常见部分。因此，不应孤立地看待事件，而应将其视为可能导致其他活动的行为链的一部分。

    例如，新用户帐户创建实例或意外创建一个或多个快照，然后创建实例可能表示可疑活动。

    在 AWS 中，CloudTrail 日志在 RunInstances 事件中捕获实例的创建

    而在 Azure 中，可以在 Azure 活动日志中捕获 VM 的创建。 

    Google 的 Cloud Audit 日志中的管理员活动审核日志可用于检测为创建 VM 而创建的 gcloud 计算实例的使用情况。

  - [Instance Deletion](https://attack.mitre.org/datasources/DS0030/#Instance Deletion) 实例删除

    删除新实例或虚拟机是许多云环境中操作的常见部分。因此，不应孤立地看待事件，而应将其视为可能导致其他活动的行为链的一部分。例如，检测一系列事件（如创建实例、将快照装载到该实例以及新用户帐户删除该实例）可能表示可疑活动。

    在 AWS 中，CloudTrail 日志捕获终止实例事件中实例的删除

    而在 Azure 中，可能会在 Azure 活动日志中捕获虚拟机的删除。 

    Google 的云审核日志中的管理员活动审核日志可用于检测 gcloud 计算实例删除以删除虚拟机的使用情况

  - [Instance Metadata](https://attack.mitre.org/datasources/DS0030/#Instance Metadata) 实例元数据

    定期对实例进行基准测试，以识别恶意修改或添加。

  - [Instance Modification](https://attack.mitre.org/datasources/DS0030/#Instance Modification) 实例修改

    建立实例活动的集中日志记录，即使在恢复到快照、回滚更改或更改持久性/存储类型后，也可用于监控和查看系统事件。专门监视与快照和回滚以及 VM 配置更改相关的事件，这些事件发生在正常活动之外。为了减少误报，有效的变更管理过程可以引入一个已知的标识符，如果云提供商支持，该标识符与变更一起记录（例如，标记或标头），以帮助区分有效的预期操作和恶意操作。

  - [Instance Start](https://attack.mitre.org/datasources/DS0030/#Instance Start) 实例启动

    建立实例活动的集中日志记录，即使在恢复到快照、回滚更改或更改持久性/存储类型后，也可用于监控和查看系统事件。专门监视与在正常活动/计划操作之外发生的实例激活相关的事件。为了减少误报，有效的变更管理过程可以引入一个已知的标识符，如果云提供商支持，该标识符与变更一起记录（例如，标记或标头），以帮助区分有效的预期操作和恶意操作。

  - [Instance Stop](https://attack.mitre.org/datasources/DS0030/#Instance Stop) 实例停止

    建立实例活动的集中日志记录，即使在恢复到快照、回滚更改或更改持久性/存储类型后，也可用于监控和查看系统事件。专门监视与在计划操作之外发生的实例停用相关的事件。为了减少误报，有效的变更管理过程可以引入一个已知的标识符，如果云提供商支持，该标识符与变更一起记录（例如，标记或标头），以帮助区分有效的预期操作和恶意操作。

- [DS0020](https://attack.mitre.org/datasources/DS0020) [Snapshot](https://attack.mitre.org/datasources/DS0020) 快照

  - [Snapshot Creation](https://attack.mitre.org/datasources/DS0020/#Snapshot Creation) [ Snapshot Deletion](https://attack.mitre.org/datasources/DS0020/#Snapshot Deletion) 检测快照的创建与删除

    为云计算基础架构组件的活动建立集中日志记录。监视可疑的事件序列，例如在短时间内创建/删除多个快照。为了减少误报，有效的变更管理过程可以引入一个已知的标识符，如果云提供商支持，该标识符与变更一起记录（例如，标记或标头），以帮助区分有效的预期操作和恶意操作。

  - [Snapshot Metadata](https://attack.mitre.org/datasources/DS0020/#Snapshot Metadata) 快照元数据

    定期对快照进行基线处理，以识别恶意修改或添加。

  - [Snapshot Modification](https://attack.mitre.org/datasources/DS0020/#Snapshot Modification) 快照修改

    为云计算基础架构组件的活动建立集中日志记录。监视可疑的事件序列，例如新用户或意外用户将快照装载到新实例。为了减少误报，有效的变更管理过程可以引入一个已知的标识符，如果云提供商支持，该标识符与变更一起记录（例如，标记或标头），以帮助区分有效的预期操作和恶意操作。

- [DS0034](https://attack.mitre.org/datasources/DS0034) [Volume](https://attack.mitre.org/datasources/DS0034)  卷

  - [Volume Creation](https://attack.mitre.org/datasources/DS0034/#Volume Creation) [Volume Deletion](https://attack.mitre.org/datasources/DS0034/#Volume Deletion) [Volume Modification ](https://attack.mitre.org/datasources/DS0034/#Volume Modification) 卷的新增与删除及修改

    监视意外 创建或出现/删除或缺少 云块存储卷, 监视云块存储卷的意外更改。为了减少误报，有效的变更管理过程可以引入一个已知的标识符，如果云提供商支持，该标识符与变更一起记录（例如，标记或标头），以帮助区分有效的预期操作和恶意操作。

  - [Volume Metadata](https://attack.mitre.org/datasources/DS0034/#Volume Metadata) 卷的元数据

    定期对云块存储卷进行基准测试，以识别恶意修改或添加。

---

## T1112 [ Modify Registry](https://attack.mitre.org/techniques/T1112)

Adversaries may interact with the Windows Registry to hide configuration information within Registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.
攻击者可能会与 Windows 注册表交互，以隐藏注册表项中的配置信息、删除信息作为清理的一部分，或作为其他技术的一部分来帮助持久化和执行。

对注册表特定区域的访问权限取决于帐户权限，有些区域需要管理员级别的访问权限。内置的 Windows 命令行实用程序 Reg 可用于本地或远程注册表修改。

也可以使用其他工具，例如远程访问工具，其中可能包含通过 Windows API 与注册表交互的功能。

注册表修改还可能包括隐藏键的操作，例如在键名前面加上空字符，这将导致错误和/或使用 Win32 API 通过 Reg 或其他实用程序读取时被忽略。 攻击者可能会滥用这些伪隐藏密钥来隐藏用于保持持久性的有效负载/命令

可以修改远程系统的注册表，以帮助执行文件作为横向移动的一部分。它要求远程注册表服务在目标系统上运行。 [[5\]](https://technet.microsoft.com/en-us/library/cc754820.aspx) 通常需要有效帐户，以及访问远程系统的 SMB/Windows 管理员共享以进行 RPC 通信。

---





















