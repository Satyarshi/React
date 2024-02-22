import styles from "./Container.module.css";

const Container = ({ children }) => {
  // can also use props.children
  return <div className={styles.container}>{children}</div>;
};
/*it is used when we create a container and the container just print whatever are its children without interferring what it is printing for eg in facebook it is like a box which has like share and comment button but the content of the box can be a image or video or gif or article anything it doesn't matter to the container

children is a special prop for passing element into component. It is used for flexible and reusable component design*/
export default Container;
