import toast from 'react-hot-toast';

import { Typography, useActionPlan, useModal } from '@/shared';
import { Dialog } from '@/widgets/dialog';

export const UnarchiveSubscriptionPlanModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { trigger } = useActionPlan();

  const isModalOpen = isOpen && type === 'unarchivePlan';

  const handleUnarchivePlan = () => {
    if (data.id) {
      trigger({ plan_id: data.id, action: 'activate' });
      onClose();
      toast.success('The plan was unarchived');
    }
  };

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
      onSubmit={handleUnarchivePlan}
      title="Are you sure?"
      btnLabel="Yes, unarchive"
    >
      <div>
        <Typography variant="paragraph" color="grey">
          Do you really want to unarchive this plan?
        </Typography>
      </div>
    </Dialog>
  );
};
