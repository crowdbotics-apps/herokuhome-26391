import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_38390_285} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5798/99eb/80646aff414d3e7beb548479b4580d9f"
        }}
        style={styles.ImageBackground_38389_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b086/69bd/94fe6420411944e716967f227acc33ea"
        }}
        style={styles.ImageBackground_38390_294}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51ad/16bd/6343432ac5480b2688cdd551b4ef693f"
        }}
        style={styles.ImageBackground_38390_287}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a28/926a/732fbd3d06cbb536c69a30d88c6f5907"
        }}
        style={styles.ImageBackground_38390_291}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed02/dd13/00af6b5fd98fa9827e54a6c2aa8423a6"
        }}
        style={styles.ImageBackground_38389_10}
      />
      <View style={styles.View_38390_300}>
        <Text style={styles.Text_38390_300}>Crash Peshal</Text>
      </View>
      <View style={styles.View_38389_8}>
        <Text style={styles.Text_38389_8}>
          Hi Everyone ! I am Peshal Sedhai. This is just my test site to monitor
          my work while I work on my projects.
        </Text>
      </View>
      <View style={styles.View_70_2382}>
        <View style={styles.View_I70_2382_70_1758} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be6d/e16e/f6f3a73a1327132ae6d01a40d81a5792"
          }}
          style={styles.ImageBackground_I70_2382_70_1762}
        />
      </View>
      <View style={styles.View_38390_298}>
        <Text style={styles.Text_38390_298}>Search</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cb0/52f7/814901441c20dd06c7fe05c8f7605bdb"
        }}
        style={styles.ImageBackground_38390_311}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f734/ffed/1d9b0364573a709d6b9fe54c38e25503"
        }}
        style={styles.ImageBackground_38390_310}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_38390_285: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("139.89071038251367%"),
    minHeight: hp("139.89071038251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(162, 89, 255, 1)"
  },
  ImageBackground_38389_24: {
    width: wp("53.06497361924913%"),
    minWidth: wp("53.06497361924913%"),
    height: hp("89.2485738452015%"),
    minHeight: hp("89.2485738452015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.347222222222221%"),
    top: hp("84.42622950819673%"),
    resizeMode: "cover"
  },
  ImageBackground_38390_294: {
    width: wp("109.23611111111111%"),
    height: hp("148.01440629802767%"),
    top: hp("-5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.6111111111111107%")
  },
  ImageBackground_38390_287: {
    width: wp("89.78221469455295%"),
    height: hp("164.54918032786884%"),
    top: hp("-10.587431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.939999050564236%")
  },
  ImageBackground_38390_291: {
    width: wp("43.600192599826386%"),
    height: hp("108.46994535519126%"),
    top: hp("-12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.80952962239583%")
  },
  ImageBackground_38389_10: {
    width: wp("9.027777777777777%"),
    height: hp("17.759562841530055%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.13888888888889%"),
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 5,
    borderTopLeftRadius: 169,
    borderTopRightRadius: 169,
    borderBottomLeftRadius: 169,
    borderBottomRightRadius: 169
  },
  View_38390_300: {
    width: wp("42.638888888888886%"),
    minWidth: wp("42.638888888888886%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.33333333333333%"),
    top: hp("23.497267759562842%")
  },
  Text_38390_300: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 37,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.69,
    textTransform: "none"
  },
  View_38389_8: {
    width: wp("56.31944444444444%"),
    minWidth: wp("56.31944444444444%"),
    minHeight: hp("39.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444445%"),
    top: hp("78.41530054644808%")
  },
  Text_38389_8: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_70_2382: {
    flexGrow: 1,
    width: wp("37.56944444444444%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.375%"),
    top: hp("5.191256830601093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I70_2382_70_1758: {
    flexGrow: 1,
    width: wp("37.56944444444444%"),
    height: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(217, 208, 227, 1)",
    borderWidth: 1.0000001192092896,
    borderTopLeftRadius: 41,
    borderTopRightRadius: 41,
    borderBottomLeftRadius: 41,
    borderBottomRightRadius: 41
  },
  ImageBackground_I70_2382_70_1762: {
    flexGrow: 1,
    width: wp("2.4108733071221247%"),
    height: hp("4.713114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2099643283420143%"),
    top: hp("2.356557377049181%")
  },
  View_38390_298: {
    width: wp("23.47222222222222%"),
    minWidth: wp("23.47222222222222%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.486111111111114%"),
    top: hp("8.60655737704918%")
  },
  Text_38390_298: {
    color: "rgba(156, 156, 156, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_38390_311: {
    width: wp("2.2916666666666665%"),
    height: hp("4.918032786885246%"),
    top: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.54166666666667%")
  },
  ImageBackground_38390_310: {
    width: wp("0.7638888888888888%"),
    height: hp("2.459016393442623%"),
    top: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%")
  },
  View_2: { height: 1024 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
