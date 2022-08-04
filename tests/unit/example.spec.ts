import { shallowMount } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton/index.vue';

describe('index.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(BaseButton, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
