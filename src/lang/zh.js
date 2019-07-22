export default {
  route: {
    Dashboard: '首页',
    EquipmentTable: '设备概览',
    MotorRealTime: '电机监测',
    motorRealTime: '电机监测',
    SymmetryAnalysis: '电流对称分析',
    DQZtransform: 'DQ矢量分析',
    TrendAnalysis: '趋势分析',
    HarmonicsAnalysis: '谐波分析',
    EnvelopeAnalysis: '包络分析',
    MotorDiagnosis: '感应电机故障诊断',
    dashboard: '首页',
    introduction: '简述',
    documentation: '文档',
    DiagnosisStandard: '阈值配置',
    guide: '引导页',
    permission: '权限测试页',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    componentIndex: '介绍',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragSelect: '拖拽 Select',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单1-1',
    'menu1-2': '菜单1-2',
    'menu1-2-1': '菜单1-2-1',
    'menu1-2-2': '菜单1-2-2',
    'menu1-3': '菜单1-3',
    menu2: '菜单2',
    Table: 'Table',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链'
  },
  myDashboard: {
    statisticsExcellent: '状态优秀的电机数',
    statisticsGood: '状态良好的电机数',
    statisticsModerate: '状态一般的电机数',
    statisticsPoor: '状态较差的电机数',
    healthIndicator: '电机健康指数',
    thd: '总谐波畸变率/ %',
    imbalance: '三相不平衡度/ %',
    frequency: '供电频率/ Hz',
    amplitude: '电流幅值/ A',
    trend: '总谐波畸变率近期变化趋势',
    radarChart: '电机特征指标',
    warningBar: '设备报警占比',
    compsBar: '设备子部件占比',
    warningTable: '电机报警记录',
    warningCalendar: '电机报警日历',
    warningTabDescription: '报警信息',
    warningTabMotorID: '电机',
    warningTabTime: '报警时间',
    warningTabSeverity: '严重程度',
    statuCardTitle: '感应电机监测平台-服务器状态',
    dbTableCount: '数据库表条目用量',
    dbTableVolume: '数据库表容量用量',
    cpuUsage: 'CPU 使用率',
    memoryUsage: '内存 使用率',
    treeMap: '设备树形图'
  },
  eqTable: {
    index: '序号',
    name: '设备名',
    sn: '序列号',
    healthIndicator: '健康指数',
    admin: '管理员',
    statu: '设备状态',
    lrTime: '最近维修时间',
    operation: '操作',
    edit: '修改',
    retrieve: '详细信息',
    realTime: '监测',
    dialogTitle: '修改设备信息',
    dialogName: '设备名',
    dialogLRtime: '最近维修时间',
    dialogCancleButton: '取消',
    dialogConfirmButton: '确认'
  },
  realTime: {
    refresh: '自动实时刷新',
    unrefresh: '关闭实时刷新',
    change: '切换电机',
    updateTime: '采样时间',
    samplingRate: '采样频率',
    packID: '信号包ID',
    statu: '电机状态',
    motorDetail: '电机详情',
    statorDetail: '定子详情',
    rotorDetail: '转子详情',
    bearingDetail: '轴承详情',
    threePhase: '三相电流信号',
    threePhaseSpec: '三相电流频谱',
    gaugeTitle: '电机状态指标',
    tabTitle: '各相电流参数',
    amplitude: '电流信号幅值(A)',
    frequency: '电流信号频率(Hz)',
    initialPhase: '电流信号初相角(°)'
  },
  symmetry: {
    step1: '请选择分析电机以及时间范围',
    step2: '请选择电流信号对象',
    step3: '分析结果',
    formName: '感应电机对象',
    dateRange: '时间范围',
    helpText: '是否需要通过趋势分析来选择待分析的信号？',
    formId: '信号ID(可选)',
    previousBtn: '返回上一步',
    packlistBtn: '获取信号列表',
    analysisBtn: '分析所选信号',
    diranalysisBtn: '按ID分析',
    helptext1: '或直接',
    timeColumn: '采集时间',
    rpmColumn: '转速 / rpm',
    dbindexColumn: '信号在数据库中的索引',
    posChartTitle: '正序分量',
    negChartTitle: '负序分量',
    zeroChartTitle: '零序分量',
    uploarChartTitle: 'U相对称分量',
    vploarChartTitle: 'V相对称分量',
    wploarChartTitle: 'W相对称分量'
  },
  dqanalysis: {
    step3: 'DQ矢量分析结果',
    dqDQComponent: 'DQ矢量图',
    threephase: '三相电流',
    envelope: '电流包络'
  },
  trend: {
    step3: '感应电机特征变化趋势',
    analysisBtn: '查看电机特征变化趋势',
    UtabTitle: 'U相电流均方根值/最大值/最小值变化趋势',
    VtabTitle: 'V相电流均方根值/最大值/最小值变化趋势',
    WtabTitle: 'W相电流均方根值/最大值/最小值变化趋势',
    THDTitle: '总谐波畸变率变化趋势',
    ImbalanceTitle: '不平衡度变化趋势'
  },
  harmonic: {
    step3: '谐波分析结果',
    harmonicComp: '各阶谐波含量',
    ShaftBearing: '驱动端轴承',
    StatorWinding: '定子绕组',
    ShellandBearing: '电机外壳及轴承',
    Airgapeccentricity: '气隙偏心',
    UnbalancedShaft: '轴不平衡',
    Bearingforeignmatter: '轴承异物入侵',
    BrokenConnector: '联轴器破损',
    BeltSystem: '传动系统',
    column: '谐波成分',
    MainHarmonic: '主谐波成分',
    Order: '阶数',
    contribution: '贡献率',
    cum_contribution: '累积贡献率',
    OptionalHarmonics: '副谐波成分',
    component: '电机部件'
  },
  envelope: {
    figureTitle: '相电流信号及包络线'
  },
  diagnosis: {
    BRB: '转子断条',
    BRM: '转子轴弯曲',
    HEALTH: '无故障',
    RMAM: '轴承故障',
    resultPrefix: '所分析信号的故障模式为'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: 'any',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 Tab 组件或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  }
}
