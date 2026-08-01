import { type FlatViewGroup } from 'src/engine/metadata-modules/flat-view-group/types/flat-view-group.type';
import {
  createStandardViewGroupFlatMetadata,
  type CreateStandardViewGroupArgs,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/view-group/create-standard-view-group-flat-metadata.util';

export const computeStandardOpportunityViewGroups = (
  args: Omit<CreateStandardViewGroupArgs<'opportunity'>, 'context'>,
): Record<string, FlatViewGroup> => {
  return {
    byStageInquiry: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'inquiry',
        isVisible: true,
        fieldValue: 'INQUIRY',
        position: 0,
      },
    }),
    byStageConsultation: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'consultation',
        isVisible: true,
        fieldValue: 'CONSULTATION',
        position: 1,
      },
    }),
    byStageMeasurements: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'measurements',
        isVisible: true,
        fieldValue: 'MEASUREMENTS',
        position: 2,
      },
    }),
    byStageQuotation: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'quotation',
        isVisible: true,
        fieldValue: 'QUOTATION',
        position: 3,
      },
    }),
    byStageOrderConfirmed: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'orderConfirmed',
        isVisible: true,
        fieldValue: 'ORDER_CONFIRMED',
        position: 4,
      },
    }),
    byStageInProduction: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'inProduction',
        isVisible: true,
        fieldValue: 'IN_PRODUCTION',
        position: 5,
      },
    }),
    byStageOrderReady: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'orderReady',
        isVisible: true,
        fieldValue: 'ORDER_READY',
        position: 6,
      },
    }),
    byStageInstallation: createStandardViewGroupFlatMetadata({
      ...args,
      objectName: 'opportunity',
      context: {
        viewName: 'byStage',
        viewGroupName: 'installation',
        isVisible: true,
        fieldValue: 'INSTALLATION',
        position: 7,
      },
    }),
  };
};
