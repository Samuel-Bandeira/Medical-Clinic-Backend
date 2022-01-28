import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core/dist/plugin/landingPage/default';
import { SpecialtiesModule } from './specialties/specialties.module';

@Module({
  imports: [GraphQLModule.forRoot({
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    typePaths:['./**/*.graphql'],
  }), SpecialtiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
