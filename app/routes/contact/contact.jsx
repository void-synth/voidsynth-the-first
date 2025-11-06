import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: "Send me a message if you're interested in discussing a project or if you just want to say hi",
  });
};

export const Contact = () => {
  const email = 'voidsynth6@gmail.com';
  const subject = encodeURIComponent('Portfolio Inquiry');
  const mailtoLink = `mailto:${email}?subject=${subject}`;

  return (
    <Section className={styles.contact}>
      <Transition in timeout={0} initial={false}>
        {({ status, nodeRef }) => (
          <div ref={nodeRef} className={styles.content}>
            <Heading className={styles.title} level={3} as="h1" data-status={status}>
              <DecoderText text="Say hello" start delay={300} />
            </Heading>
            <Divider className={styles.divider} data-status={status} />
            <Text className={styles.description} size="l" as="p" data-status={status}>
              I'm always open to new projects and collaborations. Feel free to reach out!
            </Text>
            <Button
              className={styles.button}
              data-status={status}
              href={mailtoLink}
              icon="send"
            >
              Send me a message
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};
