import { gql } from '@apollo/client';

export const Quiries = gql`
    query Get_countries {
        get_countries {
        currencies {
            _id
            conversion_rate
            iso_4217_code
        }
    }
}
`;