import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [StudentsModule],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [], 
})
export class AppModule {}
