'use client';

import toast from 'react-hot-toast';
import { RiArchiveLine, RiDeleteBinLine, RiEditLine } from '@remixicon/react';

import {
  Button,
  Plan,
  SUBSCRIPTION_ACTIVE_PATH,
  Typography,
  useComparePath,
  useModal,
} from '@/shared';

interface SubscriptionPlanProps {
  isExceeded?: boolean;
  plan: Plan;
}

export const SubscriptionPlan = ({
  isExceeded,
  plan,
}: SubscriptionPlanProps) => {
  const { onOpen } = useModal();
  const { plan_id, name, description, price, period } = plan;

  const isActivePlan = useComparePath(SUBSCRIPTION_ACTIVE_PATH);

  const handleExceededPlan = () => {
    if (isActivePlan) {
      return 'archivePlan';
    }
    if (isExceeded) {
      toast.error(
        'The max amount of plan is exceeded. Please archive or delete the active plan',
      );
      return null;
    }
    return 'unarchivePlan';
  };

  return (
    <div className="flex h-80 flex-col justify-between rounded-md border px-4 pb-4 pt-6 shadow-lg">
      <div className="space-y-6">
        <Typography
          variant="paragraph"
          weight="medium"
          format="uppercase"
          className="line-clamp-1"
        >
          {name}
        </Typography>

        <div>
          <Typography variant="h3" weight="medium">
            ${price}
          </Typography>
          <Typography variant="caption" color="grey" format="lowercase">
            per {period}
          </Typography>
        </div>

        <Typography
          variant="caption"
          color="grey"
          className="line-clamp-3 break-all"
        >
          {description}
        </Typography>
      </div>

      <div>
        <hr className="my-6" />

        <div className="flex justify-between">
          <Button
            className="gap-1"
            variant="outline"
            size="md"
            radius="full"
            onClick={() =>
              onOpen('editPlan', {
                id: plan_id,
                title: name,
                description: description,
                price: price,
              })
            }
          >
            <RiEditLine size={16} />
            Edit
          </Button>

          <Button
            className="gap-1"
            variant="outline"
            size="md"
            radius="full"
            onClick={() =>
              onOpen(handleExceededPlan(), {
                id: plan_id,
              })
            }
          >
            <RiArchiveLine size={16} />
            {isActivePlan ? 'Archive' : 'Unarchive'}
          </Button>

          <Button
            className="gap-1"
            variant="outline"
            size="md"
            radius="full"
            onClick={() => onOpen('deletePlan', { id: plan_id })}
          >
            <RiDeleteBinLine size={16} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
