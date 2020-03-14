import React from 'react';
import { SummaryCard } from '../cards/summary/summary-card';
import { GenderCard } from '../cards/gender/gender-card';
import './dashboard.css';

export class Dashboard extends React.PureComponent {
  chartData = {
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [26, 37, 11, 56, 122, 233, 98]
  };

  doughnutChartData = {
    legend: this.chartData.xAxisData,
    series: this.chartData.series.map((v, i) => ({
      value: v,
      name: this.chartData.xAxisData[i]
    }))
  };

  summaryCardData = {
    data: this.chartData.series,
    special: {
      value: 0,
      label: 'people got an error page',
      isGood: true
    }
  }

  confirmedSummaryData = {
    data: this.chartData.series,
    total: 99,
    special: {
      value: '13.765',
      label: 'monitorizate',
      isGood: true
    }
  }

  hospitalizedSummaryData = {
    data: this.chartData.series,
    total: 93,
    special: {
      value: '6',
      label: 'vindecate',
      isGood: true
    }
  }

  icuSummaryData = {
    data: this.chartData.series,
    total: 1
  }

  curedSummaryData = {
    data: this.chartData.series,
    total: 6,
    special: {
      value: '6%',
      label: 'din total',
      isGood: false
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container cards-row">
          <div className="columns">
            <div className="column">
              <SummaryCard
                to="/"
                title="Cazuri confirmate"
                data={this.confirmedSummaryData.data}
                total={this.confirmedSummaryData.total}
                special={this.confirmedSummaryData.special}
              />
            </div>
            <div className="column">
              <SummaryCard
                to="/"
                title="Cazuri spitalizate"
                data={this.hospitalizedSummaryData.data}
                total={this.hospitalizedSummaryData.total}
                special={this.hospitalizedSummaryData.special}
              />
            </div>
            <div className="column">
              <SummaryCard
                to="/"
                title="Cazuri - terapie intensivă"
                data={this.icuSummaryData.data}
                total={this.icuSummaryData.total}
                special={this.icuSummaryData.special}
              />
            </div>
            <div className="column">
              <SummaryCard
                to="/"
                title="Vindecați"
                data={this.curedSummaryData.data}
                total={this.curedSummaryData.total}
                special={this.curedSummaryData.special}
              />
            </div>
          </div>
        </div>

        <div className="container cards-row second-row">
          <div className="columns">
            <div className="column is-one-quarter">
              <GenderCard
                to="/"
                title="După gen"
                data={this.confirmedSummaryData.data}
                total={this.confirmedSummaryData.total}
                special={this.confirmedSummaryData.special}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}