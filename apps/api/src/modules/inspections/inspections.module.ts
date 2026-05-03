import { Module } from '@nestjs/common';
import { InspectionsController } from './inspections.controller';
import { InspectionsService } from './inspections.service';
import { InspectionQueueService } from './inspection-queue.service';
import { InspectionAiService } from './inspection-ai.service';
import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [InspectionsController],
  providers: [InspectionsService, InspectionQueueService, InspectionAiService],
  exports: [InspectionsService],
})
export class InspectionsModule {}

