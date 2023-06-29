import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dashboard',
  // templateUrl: './navbar-dashboard.component.html',
  template: `
   <div class="text-[#f4f5f5] flex justify-between items-center">
  <div class="p-4">
    <nav class="flex" aria-label="Breadcrumb" *ngIf="route.url !== '/dashboard'">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center" *ngFor="let item of breadcrumbs; let last = last; let i = index">
          <a
          *ngIf=" i == 0"
            routerLink="{{ item.link }}"
            class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white select-none"
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            {{ item.label }} 
          </a>
           <div class="flex items-center"  *ngIf="i != 0">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a
            *ngIf="!last"
              routerLink="{{ item.link }}"
              class="ml-1 text-sm font-medium md:ml-2 text-gray-400 hover:text-white select-none"
              >{{item.label}}</a
            >
             <span *ngIf="last" class="ml-1 text-sm font-medium md:ml-2 text-gray-400 cursor-pointer select-none">
              {{item.label}}
              </span>
          </div>
        </li>
      </ol>
    </nav>
    <p class="text-4xl font-bold" *ngIf="route.url === '/dashboard'">Dashboard</p>
  </div>

  <div class="dropdown dropdown-end">
    <label
      tabindex="0"
      class="border focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center bg-[#2a2d3e] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2 cursor-pointer"
    >
      <img src="/assets/img/user.png" class="w-10" alt="" />
      <span class="ml-2">Admin</span>
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-[#2a2d3e] rounded-box w-52"
    >
      <li>
        <a routerLink="/home" class="hover:text-white hover:bg-[#363d51]">
         <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.9438 3.33038C22.0707 2.96779 21.9787 2.56456 21.7071 2.29292C21.4354 2.02128 21.0322 1.92926 20.6696 2.05617L1.85999 8.63954C0.577721 9.08834 0.504876 10.8743 1.74631 11.426L9.24237 14.7576L12.574 22.2537C13.1257 23.4951 14.9117 23.4223 15.3605 22.14L21.9438 3.33038ZM9.77851 12.8073L3.71105 10.1106L19.37 4.63L13.8894 20.289L11.1927 14.2215L14.7071 10.7071C15.0976 10.3166 15.0976 9.68342 14.7071 9.29289C14.3166 8.90237 13.6834 8.90237 13.2929 9.29289L9.77851 12.8073Z"
              fill="currentColor"
            />
          </svg>
          Landing Page
      </a>
    </li>
      <li><a class="hover:text-white hover:bg-[#363d51]">Item 2</a></li>
    </ul>
  </div>
</div>
  `,
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent {
  @Input() breadcrumbs: { label: string, link: string }[] = [];

  constructor(public route: Router) { }

}
