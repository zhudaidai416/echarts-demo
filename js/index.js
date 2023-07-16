// 左侧部分
// ========================== 柱状图1 - 就业行业 ==========================
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
          show: false
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
  });
})();

// ========================== 折线图1 - 人员变化 ==========================
(function () {
  var yearData = [
    {
      year: '2020',
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',
      data: [
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  var myChart = echarts.init(document.querySelector('.line1 .chart'));
  var option = {
    tooltip: {
      trigger: 'axis'
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
        color: '#4c9bfd',
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
        smooth: true,
        data: yearData[0].data[0],
      },
      {
        name: '新增游客',
        type: 'line',
        smooth: true,
        data: yearData[0].data[1],
      },
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });

  // 点击切换效果
  $('.line1 h2').on('click', 'a', function () {
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];

    // 重新渲染
    myChart.setOption(option);
  });
})();

// ========================== 饼状图1 - 年龄分布 ==========================
(function () {
  var myChart = echarts.init(document.querySelector('.pie1 .chart'));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['40%', '60%'],
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();


// 右侧部分
// ========================== 柱状图2 - 技能掌握 ==========================
(function () {
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  var option = {
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
          color: 'rgba(255,255,255,.6)',
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
          color: 'rgba(255,255,255,.6)',
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
  });
})();

// ========================== 折线图2 - 播放量 ==========================
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      },
    },
    grid: {
      top: '30',
      bottom: '10',
      left: '10',
      right: '10',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        },
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#0184d5',
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(1, 132, 213, 0.4)'   // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: 'rgba(1, 132, 213, 0.1)'   // 渐变线的结束颜色
            }
          ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        // 设置拐点小圆点
        symbol: 'circle',
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12
        },
        // 开始不显示拐点，鼠标经过显示
        showSymbol: false,
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: '联盟广告',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#00d887',
          width: 2
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)'
              },
              {
                offset: 0.8,
                color: 'rgba(0, 216, 135, 0.1)'
              }
            ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        },
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12
        },
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();

// ========================== 饼状图2 - 地区分布 ==========================
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '地区分布',
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['10%', '60%'],
        roseType: 'radius',
        // 修饰饼形图文字相关的样式
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();