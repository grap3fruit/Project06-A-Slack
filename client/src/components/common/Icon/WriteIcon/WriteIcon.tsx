import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Path = styled.path`
  fill: ${(props) => props.color ?? props.theme.color.purple1};
`;

const WriteIcon = ({ color, size }: PropsWithChildren<{ color?: string; size?: string }>) => {
  return (
    <svg width={size ?? '16px'} height={size ?? '16px'} viewBox="0 0 20 20">
      <Path
        color={color}
        d="M8.66000142,13.3899994 L10.3700017,12.6999993 C10.8700018,12.4999993 11.3300019,12.1999992 11.7100019,11.8199992 L19.5600032,3.96999786 C20.1900033,3.33999776 20.0600033,2.19999757 19.2800032,1.41999745 L18.570003,0.70999733 C17.7900029,-0.070002798 16.6500027,-0.190002818 16.0300026,0.429997284 L8.22000135,8.23999856 C7.81000128,8.64999863 7.49000123,9.13999871 7.29000119,9.6899988 L6.65000109,11.4199991 C6.120001,12.7599993 7.29000119,13.9099995 8.66000142,13.3899994 Z M14.4200024,18.9999974 C16.8700028,18.9999974 19.0000002,16.96 19.0000002,14.4199996 L19.0000002,8.49999738 C19.0000002,7.34999842 17.5000002,7.34999842 17.5000002,8.49999738 L17.5000002,14.1199995 C17.5000002,16.1099999 16.1100026,17.4999974 14.1200023,17.4999974 L5.88000096,17.4999974 C3.89000064,17.4999974 2.50000016,16.1099999 2.50000016,14.1199995 L2.50000016,5.87999818 C2.50000016,3.88999785 3.89000064,2.49999738 5.88000096,2.49999738 L11.5000002,2.49999738 C12.6900021,2.49999738 12.6800021,0.999997377 11.5000002,0.999997377 L5.58000091,0.999997377 C3.0300005,0.999997377 1.00000016,3.03999771 1.00000016,5.57999813 L1.00000016,14.4199996 C1.00000016,16.96 3.0300005,18.9999974 5.58000091,18.9999974 L14.4200024,18.9999974 Z M17.2100028,4.1899979 L15.8000026,2.76999767 L16.9500028,1.61999748 C17.0600028,1.50999746 17.3300028,1.54999747 17.5200029,1.7499975 L18.230003,2.45999762 C18.430003,2.65999765 18.470003,2.92999769 18.370003,3.01999771 L17.2100028,4.1899979 Z M7.98000131,12.0499992 L8.67000142,10.1099989 C8.75000143,9.88999883 8.86000145,9.71999881 9.02000148,9.54999878 L14.7300024,3.83999784 L16.1400026,5.24999807 L10.4300017,10.989999 C10.2500017,11.159999 10.0900017,11.2599991 9.90000162,11.3299991 L8.00000131,12.0699992 C7.98000131,12.0799992 7.97000131,12.0699992 7.98000131,12.0499992 Z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default WriteIcon;
