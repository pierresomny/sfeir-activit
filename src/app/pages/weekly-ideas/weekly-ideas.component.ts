import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentNode, gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Idea } from 'src/utils/types';

const GET_IDEAS: DocumentNode = gql`
  query GetIdeas {
    ideas {
      _id,
      title,
    }
  }
`;

@Component({
             selector: 'app-weekly-ideas',
             templateUrl: './weekly-ideas.component.html',
             styleUrls: [ './weekly-ideas.component.scss' ],
           })
export class WeeklyIdeasComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  posts: any;
  private querySubscription: Subscription = new Subscription();

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo
                                 .watchQuery<{ ideas: Partial<Idea>[] }>({ query: GET_IDEAS })
                                 .valueChanges
                                 .subscribe(
                                   ({ data, loading }): void => {
                                     this.loading = loading;
                                     console.log(data.ideas);
                                   },
                                 );
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
