import { Component } from '@angular/core';
import { SharedUiModule, UsersService } from '../../../shared-ui';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../../../shared-ui/models/user';

interface DashboardCounts {
  contactsCount: number;
  eventsCount: number;
  membersCount: number;
  newsCount: number;
  callRecordings: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedUiModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: number = 0;

  users: User[] = [];
  filteredUsers: User[] = [];
  loading = true;
  error = '';
  searchText = '';
  sortColumn: 'name' | 'company' = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private userService: UsersService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.getUserlist();
  }

  getUserlist() {
    this.spinner.show();
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.loading = false;
        this.spinner.hide();
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        this.spinner.hide();
      },
    });
  }

  searchUser() {
    const text = this.searchText.toLowerCase();
    this.filteredUsers = this.users.filter(
      (u) =>
        u.name.toLowerCase().includes(text) ||
        u.email.toLowerCase().includes(text),
    );
  }

  sort(column: 'name' | 'company') {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredUsers.sort((a, b) => {
      const valA =
        column === 'name' ? a.name.toLowerCase() : a.company.name.toLowerCase();
      const valB =
        column === 'name' ? b.name.toLowerCase() : b.company.name.toLowerCase();
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  onPageChange(event: { page: number }): void {
    this.currentPage = event.page;
    // this.fetchTranscriptions();
  }
}
