import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
      { title: 'At Mt Rainier',
        url: 'https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXQlMjByYWluaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'At Leavenworth',
        url: 'https://images.unsplash.com/photo-1664211910727-0418de59b8af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdmVud29ydGglMjB3YXNoaW5ndG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'The needle in sky',
        url: 'https://images.unsplash.com/photo-1451847487946-99830706c22d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBuZWVkbGUlMjBzZWF0dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'A Grey Whale',
        url: 'https://images.unsplash.com/photo-1504641020507-a9992d81dd1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbHVnYSUyMHdoYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'At Mt Rainier',
        url: 'https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXQlMjByYWluaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'At Leavenworth',
        url: 'https://images.unsplash.com/photo-1664211910727-0418de59b8af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdmVud29ydGglMjB3YXNoaW5ndG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'The needle in sky',
        url: 'https://images.unsplash.com/photo-1451847487946-99830706c22d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBuZWVkbGUlMjBzZWF0dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'A Grey Whale',
        url: 'https://images.unsplash.com/photo-1504641020507-a9992d81dd1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbHVnYSUyMHdoYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'At Mt Rainier',
        url: 'https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXQlMjByYWluaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'At Leavenworth',
        url: 'https://images.unsplash.com/photo-1664211910727-0418de59b8af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdmVud29ydGglMjB3YXNoaW5ndG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'The needle in sky',
        url: 'https://images.unsplash.com/photo-1451847487946-99830706c22d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBuZWVkbGUlMjBzZWF0dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      { title: 'A Grey Whale',
        url: 'https://images.unsplash.com/photo-1504641020507-a9992d81dd1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbHVnYSUyMHdoYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
  ]

  updateCurrentPage(i : any){
    this.currentPage = i;
  }
  
  gotoPreviousPage(){
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : this.currentPage;
  }

  gotoNextPage(){
    this.currentPage = this.currentPage < this.images.length - 1 ? this.currentPage + 1 : this.currentPage;
  }

  checkWindowIndex(i : number){
    return Math.abs(this.currentPage - i) < 5;
  }
}
