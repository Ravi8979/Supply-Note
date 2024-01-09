<form [formGroup]="loginForm">
  <label for="username">Username:</label>
  <input type="text" id="username" formControlName="username" />

  <label for="password">Password:</label>
  <input type="password" id="password" formControlName="password" />

  <button type="button" (click)="login()">Login</button>
</form>
