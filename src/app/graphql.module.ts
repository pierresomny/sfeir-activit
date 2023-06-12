import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const headers: HttpHeaders = new HttpHeaders(
    {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1YmE5MzEzZmQ3YTdkNGFmYTg0ODg0YWJjYzg0MDMwMDQzNjMxODAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODYzMTc2MjcsImF1ZCI6IjEwOTQ5ODEyMDI5NzQtdWw3YTdiOWRyMnBva2VucjBuZWlhZTdscTJtZDY4NGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY5MTQwMDc3MTE1NzY0NDAyNDIiLCJoZCI6InNmZWlyLmNvbSIsImVtYWlsIjoic29tbnkucEBzZmVpci5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMTA5NDk4MTIwMjk3NC11bDdhN2I5ZHIycG9rZW5yMG5laWFlN2xxMm1kNjg0Yi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJQaWVycmUgU29tbnkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0Y0dwTXctd1llSkVUOTN2ZmttZzZsYzUyeEh6eWZKMGk3WmRaLTU9czk2LWMiLCJnaXZlbl9uYW1lIjoiUGllcnJlIiwiZmFtaWx5X25hbWUiOiJTb21ueSIsImlhdCI6MTY4NjMxNzkyNywiZXhwIjoxNjg2MzIxNTI3LCJqdGkiOiI1ZWU2YWQ3YzI3Y2MwMmFkMWFiZTg0MzM1MjkzMDMzNGE5MTk3ODVmIn0.NdZakxsHpmwa9D82vUt9w9Qo5NCa6-tZjABJEijeBa-HinNgJyclYEZ8EMu1QcT_lAqQbaAVuF_QOlD-i9XWoTtF9aIACbJDD6KjMWWrBlTXVMLeGcNCD17xV5dClamUivk0HgLFoxinWoT6mP60IZ2hku1GbvQVM_aFK230_z96BjCZVeue-0Lf6wReUrcio2UdxQ_SCiihBqTVpQu8pur1Hv_dKy1lYQsk6PO0H2bqHWfhI-UYFAPy0p16UEmtVIoiWbtwyoqAX5KE_hWTJcMJ5Y2fYXHHUteiZFZBYxJRqtEOmDWdoXLjQsd3DFSpNf-7dWRwDT2Jl22mpSsYjA',
    },
  );

  return {
    link: httpLink.create({ uri, headers }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
            exports: [ ApolloModule ],
            providers: [
              {
                provide: APOLLO_OPTIONS,
                useFactory: createApollo,
                deps: [ HttpLink ],
              },
            ],
          })
export class GraphQLModule {}
