// 左侧部分
// 柱状图1 - 就业行业
(function () {
  var myChart = echarts.init(document.querySelector('.bar1 .chart'));
  var option = {
    // 图表柱形颜色
    color: ['#2f89cf'],
    // 图表的提示框
    tooltip: {
      trigger: 'axis', // 触发方式
      axisPointer: {
        type: 'shadow'
      }
    },
    // 图表大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true // 是否显示刻度标签
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
        // 是否显示刻度
        axisTick: {
          alignWithLabel: true
        },
        // x 轴文字标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        },
        // x 轴线条样式
        axisLine: {
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // y 轴文字标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        },
        // y 轴线条样式
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          }
        },
        // y 轴分隔线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%', // 柱子宽度
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  
  myChart.setOption(option);
  // 跟随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图1 - 人员变化
(function () {
  var myChart = echarts.init(document.querySelector('.line1 .chart'));
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 12
      },
      axisLine: {
        show: false
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    color: ['#00f2f1', '#ed3f35'],
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: "总量",
        smooth: true,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: '新增游客',
        type: 'line',
        stack: "总量",
        smooth: true,
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      },
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼状图1 - 年龄分布
(function () {
  var myChart = echarts.init(document.querySelector('.pie1 .chart'));
  var option = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })

})();

// 右侧部分
// 柱状图2 - 技能掌握
(function () {
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  var option = {
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow'
    //   }
    // },
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['HTML5', 'CSS3', 'JavaScript', 'VUE', 'Node'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff',
        }
      },
      {
        show: true,
        inverse: true,
        data: [702, 350, 610, 793, 664],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 12
        }
      },
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            // var num = myColor.length;
            return myColor[params.dataIndex];
          }
        },
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
          color: '#fff'
        },
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69]
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15,
        },
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100]
      },
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图2 - 播放量
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  var option = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })

})();

// 饼状图2 - 地区分布
(function () {

})();