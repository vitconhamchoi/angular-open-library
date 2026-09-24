import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsStore } from '../../store/products.store';
import { INITIAL_ACTIVITIES, MONTHLY_REVENUE_DATA } from '../../core/mock/initial-data';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { LucideAngularModule, DollarSign, Package, AlertTriangle, CheckCircle, TrendingUp, ArrowUpRight, ArrowRight } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxEchartsDirective, LucideAngularModule, ButtonModule, TagModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly store = inject(ProductsStore);

  readonly DollarIcon = DollarSign;
  readonly PackageIcon = Package;
  readonly AlertIcon = AlertTriangle;
  readonly CheckIcon = CheckCircle;
  readonly TrendIcon = TrendingUp;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly ArrowRightIcon = ArrowRight;

  activities = INITIAL_ACTIVITIES;

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e2e8f0',
      borderWidth: 1,
      textStyle: { color: '#0f172a' },
      axisPointer: {
        type: 'cross',
        crossStyle: { color: '#94a3b8' }
      }
    },
    legend: {
      data: ['Doanh thu ($)', 'Lợi nhuận gộp ($)'],
      bottom: 0,
      textStyle: { color: '#64748b' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '12%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: MONTHLY_REVENUE_DATA.months,
      axisLine: { lineStyle: { color: '#cbd5e1' } },
      axisLabel: { color: '#64748b' }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#f1f5f9', type: 'dashed' } },
      axisLabel: {
        color: '#64748b',
        formatter: (val: number) => `$${val / 1000}k`
      }
    },
    series: [
      {
        name: 'Doanh thu ($)',
        type: 'line',
        smooth: true,
        data: MONTHLY_REVENUE_DATA.revenue,
        itemStyle: { color: '#3b82f6' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.35)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.02)' }
            ]
          }
        }
      },
      {
        name: 'Lợi nhuận gộp ($)',
        type: 'line',
        smooth: true,
        data: MONTHLY_REVENUE_DATA.profit,
        itemStyle: { color: '#10b981' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(16, 185, 129, 0.35)' },
              { offset: 1, color: 'rgba(16, 185, 129, 0.02)' }
            ]
          }
        }
      }
    ]
  };
}
