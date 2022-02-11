import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css'],
})
export class AddTableComponent implements OnInit {
  constructor(private tableService: TableService) {
    this.tableService = new TableService();
  }

  ngOnInit(): void {}

  addTable() {}

  InsertPlayer() {}

  updateTable() {}

  
}
