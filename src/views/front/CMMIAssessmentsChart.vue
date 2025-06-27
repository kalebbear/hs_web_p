<template>
  <div class="chart-container">
    <h2 class="chart-title">全球CMMI评估数量年度趋势 (2010-2023)</h2>
    <div class="chart-wrapper">
      <line-chart
        :chart-data="chartData"
        :options="chartOptions"
        :height="400"
      ></line-chart>
    </div>
    <div class="chart-notes">
      <p>注：数据来源于CMMI研究所公开报告汇总分析</p>
      <p>* 2020年评估数量受全球疫情影响有所下降，但从2021年开始恢复增长</p>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'CMMIAssessmentsChart',
  components: {
    'line-chart': {
      extends: Line,
      props: {
        chartData: {
          type: Object,
          required: true
        },
        options: {
          type: Object,
          default: null
        },
        height: {
          type: Number,
          default: 400
        }
      },
      mounted() {
        this.renderChart(this.chartData, this.options)
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: '评估数量',
            backgroundColor: 'rgba(136, 132, 216, 0.2)',
            borderColor: '#8884d8',
            pointBackgroundColor: '#8884d8',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#8884d8',
            borderWidth: 2,
            data: [2891, 3280, 3784, 4315, 5121, 5876, 6324, 6893, 7458, 8102, 7689, 8325, 8974, 9532]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return tooltipItem.value + ' 次评估';
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            scaleLabel: {
              display: true,
              labelString: '评估数量'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: '年份'
            }
          }]
        },
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}
.chart-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
.chart-wrapper {
  position: relative;
  margin: 0 auto;
}
.chart-notes {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}
</style>