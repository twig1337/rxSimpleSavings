import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

interface Data {
    Type: string;
    Cost: number;
    }




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    public drugId: number;
    private drugSet1 = new Array();
    private drugSet2 = new Array();
    private drugSet3 = new Array();
    public activeDrugSet = null;

     constructor(private route: ActivatedRoute) {
       this.drugId = +this.route.snapshot.paramMap.get('id');
        this.drugSet1 = [
            {Type: 'Generic', Cost: 20},
            {Type: 'Name Brand', Cost: 100}];
        this.drugSet2 = [
            {Type: 'Generic', Cost: 30},
            {Type: 'Name Brand', Cost: 100}];
        this.drugSet3 = [
            {Type: 'Generic', Cost: 25},
            {Type: 'Name Brand', Cost: 100}];

        this.activeDrugSet = this['drugSet' + this.drugId];

        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
     }


  title = 'D3 Barchart with Ionic 4';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  initSvg() {
    this.svg = d3.select('#barChart')
        .append('svg')
        .attr('width', '90%')
        .attr('height', '110%')
        .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.activeDrugSet.map((d) => d.Type));
    this.y.domain([0, d3Array.max(this.activeDrugSet, (d) => d.Cost)]);
  }

  drawAxis() {
    this.g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
  }

  drawBars() {
    this.g.selectAll('.bar')
        .data(this.activeDrugSet)
        .enter()
        .append("rect")
        .style("fill", "#4c3e54")
        .attr("class","label")
        .attr('x', (d) => this.x(d.Type))
        .attr('y', (d) => this.y(d.Cost))
        .attr('width', this.x.bandwidth())
        .attr('height', (d) => this.height - this.y(d.Cost))
        .attr("dy", ".75em")
        .text(function(d) { return d.Cost; } );
    this.g.selectAll('.bar')
        .data(this.activeDrugSet)
        .enter()
        .append("text")
        .style("fill", "#00bcf2")
        .style("font-size", 60)
        .attr("class","divergence")
        .attr('x', (d) => this.x(d.Type) + 112)
        .attr('y', (d) => this.y(d.Cost) + 55)
        .attr('width', this.x.bandwidth())
        .attr('height', (d) => this.height - this.y(d.Cost) - 10)
        .text(function(d) { return "$" + (d.Cost) } );
  }

}
